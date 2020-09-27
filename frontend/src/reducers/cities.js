import { GET_CITIES, REMOVE_CITY, ADD_CITY, GET_WEATHER } from "../actions/types.js";


const initialState = {
  cities: [],
  data: [],
}

export default function(state = initialState, action){
  switch (action.type) {
    case 'GET_CITIES':
      return {
        ...state,
        cities: action.payload
      };
    case 'REMOVE_CITY':
      return {
        ...state,
        cities: state.cities.filter(city => city.id !== action.payload)
      };
    case 'ADD_CITY':
      return {
        ...state,
        cities: [...state.cities, action.payload],
        data: [...state.data]
      };
   case 'GET_WEATHER':
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
