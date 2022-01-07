import { DogProvider } from './context/dog/DogContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
const App = () => {
  return (
    <DogProvider>
      <div className='container mx-auto mt-3'>
        <Navbar />
        <main>
          <Home />
        </main>
      </div>
    </DogProvider>
  );
};

export default App;
