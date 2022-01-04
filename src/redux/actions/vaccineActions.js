import axios from 'axios';
import {
  VACCINE_LIST_COUNTRY_REQUEST,
  VACCINE_LIST_COUNTRY_SUCCESS,
  VACCINE_LIST_COUNTRY_FAIL,
} from '../constants/vaccineConstants';

export const listVaccine = () => async (dispatch) => {
  try {
    dispatch({ type: VACCINE_LIST_COUNTRY_REQUEST });
    const { data } = await axios.get('https://covid-api.mmediagroup.fr/v1/vaccines?continent=africa');
    console.log(data);
    dispatch({
      type: VACCINE_LIST_COUNTRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VACCINE_LIST_COUNTRY_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
