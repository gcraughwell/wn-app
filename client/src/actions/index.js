import axios from 'axios';
import {FETCH_USER} from './types';

//fetch the logged in user data from google
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({type: FETCH_USER, payload: res.data});
};
