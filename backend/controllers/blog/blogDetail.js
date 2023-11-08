import asyncHandler from 'express-async-handler';
import Blog from '../../models/Blog.js';

export const blogDetail = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
})