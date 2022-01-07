import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DogProvider } from './context/dog/DogContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Dogs from './components/dogs/Dogs';
const App = () => {
  return (
    <DogProvider>
      <Router>
        <div className='container mx-auto mt-3'>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
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
