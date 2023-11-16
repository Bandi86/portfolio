'use client';
import { useEffect, useState } from 'react';
import { fetchTags } from '../../fn/fetchTags';
import { FetchTagsResponse } from '../../fn/fetchTags';
import axios from 'axios';

const Page = () => {
  interface Tag {
    _id: string;
    name: string;
  }

  interface Post {
    _id: string;
    title: string;
    content: string;
  }

  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTags: FetchTagsResponse[] = await fetchTags();
        const mappedTags: Tag[] = fetchedTags.map((tag: FetchTagsResponse) => ({
          _id: tag._id,
          name: tag.name,
        }));
        setTags(mappedTags);
        setLoading(false);
      } catch (error: any) {
        console.error('Error fetching tags:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPostsByTags = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/blog/tags/search?tags=${selectedTags.join(',')}`
        );
        setPosts(response.data.blogPosts);
      } catch (error) {
        console.error('Error fetching posts by tags:', error);
      }
    };

    if (selectedTags.length > 0) {
      fetchPostsByTags();
    } else {
      // Ha nincs kiválasztott tag, akkor töltsünk be minden posztot
      const fetchAllPosts = async () => {
        try {
          const fetchedPosts = await axios.get(
            'http://localhost:8000/api/blog'
          );
          console.log(fetchedPosts.data.blogs);

          setPosts(fetchedPosts.data.blogs);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
      fetchAllPosts();
    }
  }, [selectedTags]);

  return (
    <main className='flex'>
      <div className='flex-none bg-blue-500 p-4 w-1/4'>
        <h1 className='text-white text-2xl'>Első oszlop</h1>
        <label>Tag</label>
        {loading ? (
          <p>Loading...</p>
        ) : tags.length === 0 ? (
          <p>Nincs elérhető címke</p>
        ) : (
          tags.map((tag) => (
            <div key={tag._id}>
              <input
                type='checkbox'
                id={tag._id}
                value={tag._id}
                checked={selectedTags.includes(tag._id)}
                onChange={(e) => {
                  const tagId = e.target.value;
                  if (e.target.checked) {
                    setSelectedTags([...selectedTags, tagId]);
                  } else {
                    setSelectedTags(selectedTags.filter((id) => id !== tagId));
                  }
                }}
              />
              <label htmlFor={tag._id}>{tag.name}</label>
            </div>
          ))
        )}
      </div>
      <div className='flex-none bg-green-500 p-4 w-2/4'>
        <h1 className='text-white text-2xl'>Második oszlop</h1>
        <div className='post-container'>
          {posts.map((post) => (
            <div key={post._id} className='post'>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              {/* További bejegyzés részletek */}
            </div>
          ))}
          {posts.length === 0 && <p>Nincsenek megjeleníthető bejegyzések</p>}
        </div>
      </div>

      <div className='flex-grow bg-yellow-500 p-4 w-1/4'>
        <h1 className='text-white text-2xl'>Harmadik oszlop</h1>
      </div>
    </main>
  );
};

export default Page;
