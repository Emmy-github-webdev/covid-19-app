import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VaccineScreen = ({ vaccine, getCountry }) =>  (
    <div className='vaccine-screen-wrapper'>
      <Link to={`/${vaccine.All.country}/details`} onClick={getCountry} type='submit'>
        <span>@</span>
      </Link>
      <h2>{vaccine.All.country}</h2>
      <h3>{vaccine.All.people_vaccinated}</h3>
    </div>
  );

VaccineScreen.PropTypes = {
  getCountry: PropTypes.func.isRequired,
  vaccine: PropTypes.object.isRequired,
};

export default VaccineScreen;

