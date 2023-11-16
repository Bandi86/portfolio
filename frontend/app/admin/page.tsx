'use client';
import React, { useState, useEffect, SyntheticEvent, ChangeEvent } from 'react';
import axios from 'axios';
import { fetchTags } from '../../fn/fetchTags';

interface Tag {
  _id: string;
  name: string;
}

const Page: React.FC = () => {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : {};

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    tag: '',
  });

  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [tagInput, setTagInput] = useState<string>('');
  const [newTag, setNewTag] = useState<string>('');

  useEffect(() => {
    fetchTags();
    setLoading(false);
  }, []);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (!newPost.title || !newPost.content) {
        console.error('Error creating post: Missing fields');
        return;
      }

      const existingTags = tags.filter((tag) => selectedTags.includes(tag._id));
      const existingTagIds = existingTags.map((tag) => tag._id.toString());
      const existingTagNames = existingTags.map((tag) => tag.name);

      const newTags = selectedTags.filter(
        (tagId) => !existingTagIds.includes(tagId)
      );

      if (existingTags.length > 0) {
        // A címkék már léteznek, használd az existingTags-et
        const res = await axios.post(
          'http://localhost:8000/api/blog',
          {
            ...newPost,
            tag: existingTagNames,
          },
          {
            withCredentials: true,
          }
        );

        if (res.status === 201) {
          console.log('Response data:', res.data);
        }
      }

      if (newTags.length > 0) {
        for (const tagId of newTags) {
          const tag = tags.find((tag) => tag._id === tagId);
          if (tag) {
            // A címke még nem létezik, küldd el a szervernek
            const res = await axios.post(
              'http://localhost:8000/api/blog/tags',
              { name: tag.name },
              { withCredentials: true }
            );

            if (res.status === 201) {
              // Az új címkék létrejöttek, használd azokat
              const newTag = res.data;
              const resPost = await axios.post(
                'http://localhost:8000/api/blog',
                {
                  ...newPost,
                  tag: [...existingTagIds, newTag._id],
                },
                {
                  withCredentials: true,
                }
              );

              if (resPost.status === 201) {
                console.log('Post created successfully:', resPost.data);
              }
            }
          }
        }
      }
    } catch (error: any) {
      console.error('Error creating post:', error.response?.data);
    }
  };

  const handleTagCheckboxChange = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  const handleNewTagInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
  };

  const handleAddNewTag = async () => {
    try {
      const res = await axios.post(
        'http://localhost:8000/api/blog/tags',
        { name: newTag.trim() },
        { withCredentials: true }
      );

      if (res.status === 201) {
        const createdTag = res.data;
        setTags([...tags, createdTag]);
        setSelectedTags([...selectedTags, createdTag._id]);
        setNewTag('');
      }
    } catch (error) {
      console.error('Error creating new tag:', error);
    }
  };

  return user.role === 'admin' ? (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type='text'
          required
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <label>Content</label>
        <textarea
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, content: e.target.value }))
          }
        ></textarea>
        <label>Tag</label>
        {loading ? (
          <p>Loading...</p>
        ) : tags.length === 0 ? (
          <>
            <p>Nincs elérhető címke, adj meg egyet</p>
            <input
              type='text'
              required
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
          </>
        ) : (
          <div>
            {tags.map((tag) => (
              <div key={tag._id}>
                <input
                  type='checkbox'
                  id={tag._id}
                  value={tag._id}
                  checked={selectedTags.includes(tag._id)}
                  onChange={() => handleTagCheckboxChange(tag._id)}
                />
                <label htmlFor={tag._id}>{tag.name}</label>
              </div>
            ))}
            <div>
              <input type='text' value={newTag} onChange={handleNewTagInput} />
              <button type='button' onClick={handleAddNewTag}>
                Add New Tag
              </button>
            </div>
          </div>
        )}
        <button type='submit'>Submit</button>
      </form>
    </div>
  ) : (
    <h1>Nincs jogosultság</h1>
  );
};

export default Page;
