'use client';
import {
  useState,
  useEffect,
  SyntheticEvent,
  ChangeEvent,
  FormEvent,
} from 'react';
import axios from 'axios';

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
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [tagInput, setTagInput] = useState<string>('');
  const [newTag, setNewTag] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/blog/tags');

        setTags(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (!newPost.title || !newPost.content) {
        console.error('Error creating post: Missing fields');
        return;
      }
  
      const existingTag = tags.find((tag) => tag._id === selectedTag);
  
      if (existingTag) {
        // A címke már létezik, használd az existingTag-et
        const res = await axios.post(
          'http://localhost:8000/api/blog',
          {
            ...newPost,
            tag: existingTag._id,
          },
          {
            withCredentials: true,
          }
        );
  
        if (res.status === 201) {
          console.log('Response data:', res.data);
        }
      } else {
        // A címke még nem létezik, küldd el a szervernek
        const res = await axios.post(
          'http://localhost:8000/api/blog/tags',
          { name: tagInput.trim() },
          { withCredentials: true }
        );
  
        if (res.status === 201) {
          // Az új címke létrejött, használd az új címkét
          const newTag = res.data;
          const resPost = await axios.post(
            'http://localhost:8000/api/blog',
            {
              ...newPost,
              tag: newTag._id,
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
    } catch (error: any) {
      console.error('Error creating post:', error.response?.data);
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
            <select
              name='tag'
              id='tag'
              value={selectedTag || ''}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value=''>Válassz egy címkét...</option>
              {tags.map((tag) => (
                <option key={tag._id} value={tag._id}>
                  {tag.name}
                </option>
              ))}
            </select>
            <label>uj tag</label>
            <input
              type='text'
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
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
