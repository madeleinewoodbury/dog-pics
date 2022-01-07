import { DogProvider } from './context/dog/DogContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
const App = () => {
  return (
    <DogProvider>
      <div className='flex flex-col justify-between'>
        <Navbar />
        <main className='container mx-auto'>
          <Home />
        </main>
      </div>
    </DogProvider>
  );
};

export default App;
