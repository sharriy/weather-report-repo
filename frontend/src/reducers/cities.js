import { GET_LEADS } from "../actions/types.js";

const initialState = {
  cities: []
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
        cities: state.cities.filter(city => city.name !== action.payload)
      };
    default:
      return state;
  }
}
