import asyncHandler from 'express-async-handler';
import User from '../../models/User.js';

export const usersList = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password');
    res.status(200).json(users);
})