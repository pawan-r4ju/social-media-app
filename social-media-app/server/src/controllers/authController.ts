import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { IUser } from '../models/User';
import User from '../models/User';

// Generate JWT Token
const generateToken = (id: string): string => {
    return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '30d' });
};

/**
 * @desc    Register a new user
 */
export const registerUser = async ({ username, email, password }: { username: string; email: string; password: string }): Promise<{ user: IUser; token: string }> => {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    if (user) {
        return { user, token: generateToken(user._id) };
    } else {
        throw new Error('Invalid user data');
    }
};

/**
 * @desc    Login an existing user
 */
export const loginUser = async ({ email, password }: { email: string; password: string }): Promise<{ user: IUser; token: string }> => {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    return { user, token: generateToken(user._id) };
};

/**
 * @desc    Get the currently logged-in user's details
 */
export const getMe = async (userId: string): Promise<IUser> => {
    const user = await User.findById(userId).select('-password'); // Exclude password from response
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

/**
 * @desc    Log out the user
 */
export const logoutUser = async (userId: string): Promise<void> => {
    // Implement token black