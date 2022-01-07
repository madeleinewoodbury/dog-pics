import { SiDatadog } from 'react-icons/si';
const Navbar = () => {
  return (
    <nav class='navbar mb-2 p-3 shadow-lg bg-primary'>
      <div class='px-2 mx-2 navbar-start'>
        <span class='text-xl font-bold'>
          <SiDatadog className='inline pr-2 text-5xl' /> Dog Pics
        </span>
      </div>
      <div class='hidden px-2 mx-2 navbar-center lg:flex'>
        <div class='flex items-stretch'>
          <select class='select select-pimary w-full max-w-xs'>
            <option>Seach Dog Breed</option>
            <option>Golden Retriever</option>
            <option>Boxer</option>
            <option>Husky</option>
          </select>
        </div>
      </div>
      <div class='navbar-end pr-2'>About</div>
    </nav>
  );
};

export default Navbar;
