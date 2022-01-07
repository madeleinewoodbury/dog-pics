import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DogContext from '../../context/dog/DogContext';
import { getImages } from '../../context/dog/DogActions';

const Dogs = () => {
  const { images, dispatch, loading } = useContext(DogContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const fetchImages = async () => {
      const data = await getImages(params);
      dispatch({ type: 'GET_IMAGES', payload: data });
    };
    fetchImages();
  }, [dispatch, params]);

  return (
    <div>
      <h1>Dogs</h1>
    </div>
  );
};

export default Dogs;
