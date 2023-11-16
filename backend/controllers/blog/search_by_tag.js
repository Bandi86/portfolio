import asyncHandler from 'express-async-handler';
import Blog from '../../models/Blog.js';
import Tag from '../../models/Tag.js';
import mongoose from 'mongoose';

export const searchByTags = asyncHandler(async (req, res) => {
  const tagIds = Array.isArray(req.query.tags)
    ? req.query.tags
    : [req.query.tags]; // Az azonosítók a query-ben (pl.: '/api/search?tags=id1,id2')

  console.log(tagIds);

  try {
    // Blogbejegyzések keresése az adott azonosítók alapján
    const blogPosts = await Blog.find({ tag: { $in: tagIds } }); // Megfelelő blogbejegyzések
    console.log(blogPosts);

    const length = blogPosts.length;
    return res.status(200).json({ blogPosts, length });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});
