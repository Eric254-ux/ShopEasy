export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export class UserModel {
    private users: User[] = [];

    public registerUser(user: User): User {
        this.users.push(user);
        return user;
    }

    public findUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }

    public getAllUsers(): User[] {
        return this.users;
    }
}