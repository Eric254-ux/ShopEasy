import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();
const authController = new AuthController();

export function setAuthRoutes(app: Router) {
    app.post('/register', authController.registerUser);
    app.post('/login', authController.loginUser);
}