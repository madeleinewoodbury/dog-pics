import { useContext, useEffect } from 'react';
import DogContext from '../context/dog/DogContext';
import { getBreeds } from '../context/dog/DogActions';
import BreedCard from '../components/BreedCard';

const Breeds = () => {
  const { breeds, loading, dispatch } = useContext(DogContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const fetchBreeds = async () => {
      const data = await getBreeds();
      dispatch({ type: 'GET_BREEDS', payload: data });
    };
    fetchBreeds();
  }, [dispatch]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mb-4'>
      {breeds.map((breed, idx) => (
        <BreedCard key={idx} breed={breed} />
      ))}
    </div>
  );
};

export default Breeds;
