import { useContext, useEffect } from 'react';
import DogContext from '../context/dog/DogContext';
import { getBreeds } from '../context/dog/DogActions';
import BreedTable from '../components/breeds/BreedTable';

const Home = () => {
  const { breeds, loading, dispatch } = useContext(DogContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    fetchBreeds();
  }, [dispatch]);

  const fetchBreeds = async () => {
    const data = await getBreeds();
    dispatch({ type: 'GET_BREEDS', payload: data });
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className='w-4/5 mx-auto'>
      <BreedTable breeds={breeds} />
    </div>
  );
};

export default Home;
