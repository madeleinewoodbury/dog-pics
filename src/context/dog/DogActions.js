import axios from 'axios';

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
