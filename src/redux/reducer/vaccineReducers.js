import _ from 'lodash';
import {
  VACCINE_LIST_COUNTRY_SUCCESS,
  VACCINE_LIST_COUNTRY_FAIL,
  VACCINE_LIST_CONTINENT_SUCCESS,
  VACCINE_LIST_CONTINENT_FAIL,
} from '../constants/vaccineConstants';

const initialState = [];

export const vaccineListReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case VACCINE_LIST_COUNTRY_SUCCESS:
      const newState = _.filter(
        state, (vaccine) => vaccine.All.country === payload,
      );
      return newState;

    case VACCINE_LIST_COUNTRY_FAIL:
      return {
        error: action.payload,
      };
    
    case VACCINE_LIST_CONTINENT_SUCCESS: 
      return payload;
    case VACCINE_LIST_CONTINENT_FAIL:
      return {
        error: action.payload
      }
    default:
      return state;
  }
};
