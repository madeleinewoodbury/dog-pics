import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { capitalize } from '../utils/functions';

const BreedCard = ({ breed }) => {
  const [subBreed, setSubBreed] = useState(breed[1][0]);

  return (
    <div className='card shadow-lg'>
      <div className='card-body'>
        <h2 className='card-title'>{capitalize(breed[0])}</h2>
        <select
          disabled={breed[1].length < 1}
          className='select select-bordered w-full max-w-xs select-sm'
          onChange={(e) => setSubBreed(e.target.value)}
        >
          {breed[1].length === 0 && <option value='0'>No sub breeds</option>}
          {breed[1].map((b, idx) => (
            <option key={idx} value={b}>
              {capitalize(b)}
            </option>
          ))}
        </select>
        <div className='card-actions'>
          <Link
            to={
              subBreed !== undefined
                ? `/${breed[0]}/${subBreed}`
                : `/${breed[0]}`
            }
            className='btn btn-secondary btn-sm'
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

BreedCard.propTypes = {
  breed: PropTypes.array.isRequired,
};

export default BreedCard;
