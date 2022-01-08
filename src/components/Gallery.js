import PropTypes from 'prop-types';

const Gallery = ({ images, handleClick }) => {
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mb-4'>
      {images.map((image, idx) => (
        <div
          onClick={(e) => handleClick(idx)}
          key={idx}
          className='custom-card-image'
        >
          <div className='rounded-lg card image-full cursor-pointer'>
            <figure>
              <img src={image} alt='' />
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Gallery;
