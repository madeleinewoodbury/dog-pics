import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DogContext from '../context/dog/DogContext';
import { searchBreeds } from '../context/dog/DogActions';
import { SiDatadog } from 'react-icons/si';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const { dispatch, searchAvailable, current } = useContext(DogContext);

  // useEffect(() => {
  //   // stuff
  // }, [current]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING' });
    const data = await searchBreeds(search);
    dispatch({ type: 'GET_BREEDS', payload: data });
  };
  return (
    <nav className='navbar mb-2 p-3 shadow-lg bg-neutral text-neutral-content rounded-box'>
      <div className='px-2 mx-2 navbar-start'>
        <Link to='/' className='text-xl font-bold'>
          <SiDatadog className='inline pr-2 text-5xl' />{' '}
          <span className='hide-sm'>Dog Pics</span>
        </Link>
      </div>
      {searchAvailable && (
        <form onSubmit={handleSubmit} className='form navbar-end px-2'>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Search breeds'
              className='input input-ghost'
              value={search}
              name='search'
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button type='submit' className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-6 h-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </button>
        </form>
      )}

      {current && <div className='navbar-end px-2 text-xl'>{current}</div>}
    </nav>
  );
};

export default Navbar;
