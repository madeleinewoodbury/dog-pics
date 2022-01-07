const dogReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BREEDS':
      return {
        ...state,
        breeds: action.payload,
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
