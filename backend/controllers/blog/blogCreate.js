import asyncHandler from 'express-async-handler';
import Blog from '../../models/Blog.js';

// Create blog

export const blogCreate = asyncHandler(async (req, res) => {
  const { title, content, tag } = req.body;
 
  const author = req.user._id;

  const blog = await Blog.create({
    title,
    content,
    author,
    tag,
  });

  if (blog) {
    res.status(201).json({
      _id: blog._id,
      title: blog.title,
      content: blog.content,
      author: blog.author,
      tag: blog.tag,
      created_at: blog.created_at,
      updated_at: blog.updated_at,
    });
  } else {
    res.status(400);
    throw new Error('Invalid blog data');
  }
});
