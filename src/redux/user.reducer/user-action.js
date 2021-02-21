export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
  });

  export const googleSignInStart = () => ({
    type: 'GOOGLE_START',
  });

  export const signInSuccess = (user) => ({
    type: 'SIGN_IN_SUCCESS',
    payload : user
  });

  export const signInError = (error) => ({
    type: 'SIGN_IN_ERROR',
    payload : error
  });

  export const emailSignInStart = (emailPass) => ({
    type: 'EMAIL_START',
    payload : emailPass
  });

  export const checkCurrentUser = ()=>({
    type:'CHECK_CURRENT_USER'
  })

  export const signOutStart = () =>({
    type : 'SIGN_OUT_START'
  })

  export const signOutSuccess = () =>({
    type : 'SIGN_OUT_SUCCESS'
  })

  export const signOutError = (error) =>({
    type : 'SIGN_OUT_FAILURE',
    payload : error
  })
  