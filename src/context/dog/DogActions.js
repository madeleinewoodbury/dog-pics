import axios from 'axios';
import { shuffle, capitalize } from '../../utils/functions';

const dog = axios.create({ baseURL: 'https://dog.ceo/api' });

export const getBreeds = async () => {
  const res = await dog.get('/breeds/list/all');
  const breedArr = Object.entries(res.data.message);
  return breedArr;
};

export const searchBreeds = async (search) => {
  const res = await dog.get('/breeds/list/all');
  const breedArr = Object.entries(res.data.message);
  if (search === '') {
    return breedArr;
  } else {
    const searchResult = [];
    for (let i in breedArr) {
      if (breedArr[i][0].includes(search.toLowerCase())) {
        searchResult.push(breedArr[i]);
        continue;
      }
      for (let breed of breedArr[i][1]) {
        if (breed.includes(search.toLowerCase())) {
          searchResult.push(breedArr[i]);
        }
      }
    }

    return searchResult;
  }
};

export const getImages = async (params) => {
  let url;
  let current;
  if (params.subbreed) {
    url = `/breed/${params.breed}/${params.subbreed}/images`;
    current = `${capitalize(params.subbreed)} ${capitalize(params.breed)}`;
  } else {
    url = `/breed/${params.breed}/images`;
    current = capitalize(params.breed);
  }

  const res = await dog.get(url);
  const data = {
    images: shuffle(res.data.message),
    current,
  };

  return data;
};
