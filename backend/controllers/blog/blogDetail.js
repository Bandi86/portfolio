import asyncHandler from 'express-async-handler';
import Blog from '../../models/Blog.js';

export const blogDetail = asyncHandler(async (req, res) => {
  const blogId = req.params.id;

  if (!blogId.match(/^[0-9a-fA-F]{24}$/)) {
    // Az azonosító nem érvényes ObjectId
    res.status(400).json({ message: 'Invalid blog ID' });
    return;
  }

  const blog = await Blog.findById(blogId);

  if (!blog) {
    // Nincs megtalálható blog az adott azonosítóval
    res.status(404).json({ message: 'Blog not found' });
    return;
  }

  res.status(200).json(blog);
});
