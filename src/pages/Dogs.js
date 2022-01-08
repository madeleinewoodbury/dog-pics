import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import DogContext from '../context/dog/DogContext';
import { getImages } from '../context/dog/DogActions';
import Carousel from '../components/Carousel';
import Gallery from '../components/Gallery';

const Dogs = () => {
  const [index, setIndex] = useState(0);
  const [carousel, setCarousel] = useState(false);
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

  const handleClick = (idx) => {
    setIndex(idx);
    setCarousel(!carousel);
  };

  const handleNext = () => {
    if (index !== images.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      {carousel ? (
        <>
          <Carousel
            images={images}
            index={index}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
          <div className='flex justify-center my-4'>
            <button
              onClick={(e) => handleClick(0)}
              className='btn btn-secondary'
            >
              Back to Gallery
            </button>
          </div>
        </>
      ) : (
        <Gallery images={images} handleClick={handleClick} />
      )}
    </>
  );
};

export default Dogs;
