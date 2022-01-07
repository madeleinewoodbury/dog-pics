import axios from 'axios';

const dog = axios.create({ baseURL: 'https://dog.ceo/api' });

export const getBreeds = async () => {
  const res = await dog.get('/breeds/list/all');
  const breedArr = Object.entries(res.data.message);
  return breedArr;
};
