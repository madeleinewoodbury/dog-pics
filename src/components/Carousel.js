import PropTypes from 'prop-types';

const Carousel = ({ images, index, handlePrev, handleNext }) => {
  return (
    <div className='w-full carousel'>
      <div className='relative w-full carousel-item'>
        <img src={images[index]} className='max-w-full mx-auto' alt='' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <button onClick={handlePrev} className='btn btn-circle'>
            ❮
          </button>
          <button onClick={handleNext} className='btn btn-circle'>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default Carousel;
