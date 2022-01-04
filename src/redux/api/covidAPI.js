import axios from 'axios';
import _ from 'lodash';
import {
  fetchContinent,
  fetchContinentFailure,
  fetchCountryDetails,
} from '../actions/vaccineActions';

const baseURL = 'https://covid-api.mmediagroup.fr/v1/vaccines?continent=africa';

export const fetchVacinated = () => (dispatch) => {
  axios
    .get(baseURL)
    .then((res) => {
      const reports = res.data;
      const continent = [];
      _.forEach(reports, (report) => continent.push(report));
      dispatch(fetchContinent(continent));
    })
    .catch((err) => {
      dispatch(fetchContinentFailure(err.message));
    });
};

export const fetchCountry = (countryId) => (dispatch) => {
  axios
    .get(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${countryId}`)
    .then(() => {
      dispatch(fetchCountryDetails(countryId));
    });
};
