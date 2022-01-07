import PropTypes from 'prop-types';
import { capitalize } from '../../utils/capitalize';

const BreedCard = ({ breed }) => {
  let name = capitalize(breed[0]);
  const subBreeds = breed[1].map((b) => capitalize(b));

  return (
    <div className='card shadow-lg'>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <select
          disabled={subBreeds.length < 1}
          className='select select-bordered w-full max-w-xs'
        >
          {subBreeds.length === 0 && <option value='0'>No sub breeds</option>}
          {subBreeds.map((b, idx) => (
            <option key={idx} value={b}>
              {b}
            </option>
          ))}
        </select>
        <div className='card-actions'>
          <button className='btn btn-accent'>View</button>
        </div>
      </div>
    </div>
  );
};

BreedCard.propTypes = {
  breed: PropTypes.array.isRequired,
};

export default BreedCard;
