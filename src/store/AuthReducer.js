import Firebase from '../../Firebase';

export const initialState = {
  status: '',
  error: '',
  user: {},
};

const LOGIN_BEGIN = 'LOGIN_BEGEIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const SIGNUP_BEGIN = 'SIGNUP_BEGIN';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return { ...state, status: 'pending' };
    case LOGIN_SUCCESS:
      return { ...state, status: 'resolved', user: action.payload };
    case LOGIN_FAILURE:
      return { ...state, status: 'rejected', error: action.payload };
    default:
      return state;
  }
}

export const login = (email, password) => async (dispatch) => {
  console.log('ASYNC login email password :', email, password);
  try {
    dispatch({ type: LOGIN_BEGIN });
    return Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const { email, uid } = response.user;
        return response.user.getIdTokenResult().then((response) => {
          const user = { email, uid, token: response.token };
          dispatch({
            type: LOGIN_SUCCESS,
            payload: user,
          });
        });
      });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err });
    console.log('~~~LOGIN ERROR :', err);
  }
};
