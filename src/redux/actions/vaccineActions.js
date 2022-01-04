import {
  VACCINE_LIST_COUNTRY_SUCCESS,
  VACCINE_LIST_COUNTRY_FAIL,
  VACCINE_LIST_CONTINENT_SUCCESS,
  VACCINE_LIST_CONTINENT_FAIL,
} from '../constants/vaccineConstants';

export const getContinent = (payload) => ({
  type: VACCINE_LIST_CONTINENT_SUCCESS,
  payload,
});

export const getContinentFail = (error) => ({
  type: VACCINE_LIST_CONTINENT_FAIL,
  payload: error.response && error.response.data.message ? error.response.data.message : error.message,
});

export const getCountry = (payload) => ({
  type: VACCINE_LIST_COUNTRY_SUCCESS,
  payload,
});

export const getCountryFail = (error) => ({
  type: VACCINE_LIST_COUNTRY_FAIL,
  payload: error.response && error.response.data.message ? error.response.data.message : error.message,
});
