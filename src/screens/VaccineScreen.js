import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import '../App.css';

const VaccineScreen = ({ vaccine, getCountry }) => (
  <>
    <div className="card inner-wrapper" data-id={vaccine.All.country} data-testid="card">
      <Link to={`/detail/${vaccine.All.country}`} onClick={getCountry} type="submit">
        <BsArrowRightCircleFill color="white" />
      </Link>
      <h1>{vaccine.All.country}</h1>
      <h1>{vaccine.All.people_vaccinated.toLocaleString()}</h1>
    </div>
  </>
);

VaccineScreen.propTypes = {
  vaccine: PropTypes.shape({}).isRequired,
  getCountry: PropTypes.func.isRequired,
};
export default VaccineScreen;
