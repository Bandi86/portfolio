import asyncHandler from 'express-async-handler';
import Blog from '../../models/Blog.js';

// Delete blog

export const blogDelete = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);

  if (blog) {
    res.status(200).json({
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