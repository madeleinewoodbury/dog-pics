import PropTypes from 'prop-types';

const BreedTable = ({ breeds }) => {
  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  return (
    <div className='overflow-x-auto my-4'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>Breed</th>
            <th>Sub Breeds</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {breeds.map((breed, idx) => (
            <tr key={idx} className='hover'>
              <td>{capitalize(breed[0])}</td>
              <td>
                {breed[1].length > 0 ? (
                  <select className='select select-bordered w-full max-w-xs'>
                    {breed[1].map((subbreed) => (
                      <option value={subbreed}>{capitalize(subbreed)}</option>
                    ))}
                  </select>
                ) : null}
              </td>
              <td>
                <button className='btn'>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

BreedTable.propTypes = {
  breeds: PropTypes.array.isRequired,
};

export default BreedTable;
