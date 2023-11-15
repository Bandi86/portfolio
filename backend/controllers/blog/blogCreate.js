import asyncHandler from 'express-async-handler';
import Blog from '../../models/Blog.js';
import Tag from '../../models/Tag.js';


// Create blog

export const blogCreate = asyncHandler(async (req, res) => {
  const { title, content, tag: tagInputTrimmed } = req.body;

  const author = req.user._id;

  try {
    let tagId;

    const existingTag = await Tag.findOne({ name: tagInputTrimmed });

    if (!title || !content || existingTag) {
      // Ha nincs cím vagy tartalom, ne hozzon létre semmilyen entitást
      res.status(400);
      throw new Error('Invalid blog data');
    }

    if (existingTag) {
      const blog = await Blog.create({
        title,
        content,
        author,
        tag: existingTag._id,
      });

      await blog.save();
      res.status(201).json(blog);
    } else {
      const newTag = new Tag({ name: tagInputTrimmed });

      await newTag.save();

      const blog = await Blog.create({
        title,
        content,
        author,
        tag: newTag._id,
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
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
