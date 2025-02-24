import express from 'express';
import { Request, Response } from 'express';
import { registerUser, loginUser, getMe, logoutUser } from '../controllers/authController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        const user = await registerUser({ username, email, password });
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @route   POST /api/auth/login
 * @desc    Login an existing user
 * @access  Public
 */
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await loginUser({ email, password });
        res.status(200).json({ user, token });
    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
});

/**
 * @route   GET /api/auth/me
 * @desc    Get the currently logged-in user's details
 * @access  Private
 */
router.get('/me', protect, async (req: Request, res: Response) => {
    try {
        const user = await getMe(req.user?._id);
        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @route   POST /api/auth/logout
 * @desc    Log out the user (invalidate token)
 * @access  Private
 */
router.post('/logout', protect, async (req: Request, res: Response) => {
    try {
        await logoutUser(req.user?._id);
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;