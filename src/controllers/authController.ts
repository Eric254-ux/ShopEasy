import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user'; // Assuming user model is in 'src/models/user.ts'

class AuthController {
    async registerUser(req, res) {
        // Logic for user registration
        const { username, password } = req.body;
        // Validate input and save user to database
        // Respond with success or error message
    async registerUser(req: Request, res: Response) {
        try {
            const { username, email, password } = req.body;

            if (!username || !email || !password) {
                return res.status(400).json({ message: 'Please provide username, email, and password.' });
            }

            const existingUser = await User.findOne({ $or: [{ email }, { username }] });
            if (existingUser) {
                return res.status(400).json({ message: 'User with this email or username already exists.' });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                username,
                email,
                password: hashedPassword,
            });

            await newUser.save();

            res.status(201).json({ message: 'User registered successfully.' });
        } catch (error) {
            res.status(500).json({ message: 'Server error during registration.', error });
        }
    }

    async loginUser(req, res) {
    async loginUser(req: Request, res: Response) {
        // Logic for user login
        const { username, password } = req.body;
        // Validate credentials and respond with success or error message
        // 1. Find user by username/email
        // 2. Compare submitted password with hashed password in DB using bcrypt.compare()
        // 3. If valid, generate a JWT token and send it to the client
    }
}

export default new AuthController();