const INITIAL_STATE = {
    currentUser: null,
    errorMessage : null
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN_SUCCESS':
        return {
          ...state,
          currentUser: action.payload,
          errorMessage : null
        };
        case 'SIGN_OUT_SUCCESS':
          return{
            ...state,
            currentUser: null,
            errorMessage : null
          }
        case 'SIGN_OUT_ERROR':
          case 'SIGN_IN_ERROR':
          return {
            ...state,
            currentUser: null,
            errorMessage : action.payload
          };
      default:
        return state;
    }
  };
  
  export default userReducer;