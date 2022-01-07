import { createContext, useReducer } from 'react';
import dogReducer from './DogReducer';

const DogContext = createContext();

export const DogProvider = ({ children }) => {
  const initialState = {
    breeds: [],
    dogs: [],
    dog: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(dogReducer, initialState);

  return (
    <DogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DogContext.Provider>
  );
};

export default DogContext;
