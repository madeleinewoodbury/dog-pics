import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DogProvider } from './context/dog/DogContext';
import Navbar from './components/Navbar';
import Breeds from './pages/Breeds';
import Dogs from './pages/Dogs';

const App = () => {
  return (
    <DogProvider>
      <Router>
        <div className='container mx-auto mt-3'>
          <Navbar />
          <main className='w-4/5 mx-auto'>
            <Routes>
              <Route path='/' element={<Breeds />} />
              <Route path='/:breed' element={<Dogs />} />
              <Route path='/:breed/:subbreed' element={<Dogs />} />
            </Routes>
          </main>
        </div>
      </Router>
    </DogProvider>
  );
};

export default App;
