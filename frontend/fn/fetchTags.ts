import axios from 'axios';

export type FetchTagsResponse = {
  _id: string;
  name: string;
  
};

export const fetchTags = async (): Promise<FetchTagsResponse[]> => {
  try {
    const response = await axios.get('http://localhost:8000/api/blog/tags');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // alapértelmezett érték, ha hiba történik
  }
};
