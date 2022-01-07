import { SiDatadog } from 'react-icons/si';
const Navbar = () => {
  return (
    <nav className='navbar mb-2 bg-primary shadow-lg'>
      <div className='navbar-start mx-auto'>
        <span className='text-3xl font-bold mx-auto'>
          <SiDatadog className='inline pr-3 text-5xl' />
          Dog Pics
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
