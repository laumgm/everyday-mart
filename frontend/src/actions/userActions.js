import axios from 'axios';
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
} from '../constants/userConstants.js';


export const register = (firstName, lastName, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { firstName, lastName, email, password } });
    
    const { data } = await axios.post(
      'http://localhost:5000/api/user/register', 
      { firstName, lastName, email, password, }
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
    type: USER_REGISTER_FAIL,
    payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
  
export const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNIN_REQUEST })

    const { data } = await axios.post('http://localhost:5000/api/user/login', { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
};
  
export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_SIGNOUT });
};



