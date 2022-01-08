import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DogContext from '../context/dog/DogContext';
import { getImages } from '../context/dog/DogActions';

const Dogs = () => {
  const { images, dispatch, loading } = useContext(DogContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const fetchImages = async () => {
      let data = await getImages(params);
      dispatch({ type: 'GET_IMAGES', payload: data });
    };
    fetchImages();
  }, [dispatch, params]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mb-4'>
      {images.map((image, idx) => (
        <div key={idx} className='custom-card-image'>
          <div className='rounded-lg card image-full'>
            <figure>
              <img src={image} />
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dogs;
