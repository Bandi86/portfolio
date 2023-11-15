import asyncHandler from 'express-async-handler';
import Blog from '../../models/Blog.js';

export const blogList = asyncHandler(async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).json(blogs + blogs.length);
    console.log(blogs);
})