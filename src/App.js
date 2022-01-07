import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
const App = () => {
  return (
    <>
      <div className='flex flex-col justify-between'>
        <Navbar />
        <main className='container mx-auto'>{/* <Home /> */}</main>
      </div>
    </>
  );
};

export default App;
