import axios from 'axios';
import _ from 'lodash';
import {getContinent, getContinentFail, getCountry, getCountryFail} from '../actions/vaccineActions';

const URL = 'https://covid-api.mmediagroup.fr/v1/vaccines?continent=africa';

export const listContinent = () => (dispatch) => {
  axios.get(URL).then((res) => {
    const continentInfos = res.data;
    const continent = [];
    _.forEach(continentInfos, (continentInfo) => continent.push(continentInfo));
    dispatch(getContinent(continent));
  })
  .catch((error) => {
    dispatch(getContinentFail(error.message))
  });
};

export const listCountry = () => (dispatch) => {
  axios.get(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${countryId}`).then(() => {
      dispatch(getCountry(countryId));
    })
    .catch((error) => {
      dispatch(getCountryFail(error.message));
    });
};