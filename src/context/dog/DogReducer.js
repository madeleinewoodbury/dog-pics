const dogReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BREEDS':
      return {
        ...state,
        breeds: action.payload,
        searchAvailable: true,
        current: null,
        loading: false,
      };
    case 'GET_IMAGES':
      return {
        ...state,
        images: action.payload.images,
        current: action.payload.current,
        searchAvailable: false,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default dogReducer;
