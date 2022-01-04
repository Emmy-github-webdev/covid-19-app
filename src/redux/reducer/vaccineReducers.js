import {
  VACCINE_LIST_COUNTRY_REQUEST,
  VACCINE_LIST_COUNTRY_SUCCESS,
  VACCINE_LIST_COUNTRY_FAIL,
} from '../constants/vaccineConstants';

const initialState = [];

export const vaccineListReducer = (state = initialState, action) => {
  switch (action.type) {
    case VACCINE_LIST_COUNTRY_SUCCESS:
      const newState = 
    case VACCINE_LIST_COUNTRY_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
