import axios from 'axios';

import { GET_CITIES, REMOVE_CITY, ADD_CITY, GET_WEATHER} from './types';

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

// REMOVE CITY
export const removeCity = (id) => dispatch => {
  axios
  .delete(`/citylist/${id}/`)
  .then(res => {
    dispatch({
      type: REMOVE_CITY,
      payload: id
    });
  })
  .then(res => {
    return axios
    .get("/weathers")
    .then(res => {
      dispatch({
        type: GET_WEATHER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
}

//ADD CITY

export const addCity = (city) => dispatch => {
  axios
  .post("/citylist/", city)
  .then(res => {
    dispatch({
      type: ADD_CITY,
      payload: res.data
    });
  })
  .then(res => {
    return axios
    .get("/weathers")
    .then(res => {
      dispatch({
        type: GET_WEATHER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
}

//get weathers
export const getWeather = () => dispatch => {
  axios
  .get("/weathers")
  .then(res => {
    dispatch({
      type: GET_WEATHER,
      payload: res.data
    });
  })
  .catch(err => console.log(err));
}
