import axios from 'axios';

import { GET_CITIES, REMOVE_CITY } from './types';

// GET CITIES
export const getCities = () => dispatch => {
  axios
  .get("/citylist")
  .then(res => {
    dispatch({
      type: GET_CITIES,
      payload: res.data
    });
  })
  .catch(err => console.log(err));
}
