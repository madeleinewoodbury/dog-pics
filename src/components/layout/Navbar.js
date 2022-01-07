import { SiDatadog } from 'react-icons/si';

const Navbar = () => {
  return (
    <nav className='navbar mb-2 p-3 shadow-lg bg-neutral text-neutral-content rounded-box'>
      <div className='px-2 mx-2 navbar-start'>
        <span className='text-xl font-bold'>
          <SiDatadog className='inline pr-2 text-5xl' /> Dog Pics
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
