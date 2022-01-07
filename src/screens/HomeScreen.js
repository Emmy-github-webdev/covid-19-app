import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVacinated, fetchCountry } from '../redux/api/covidAPI';
import VaccineScreen from './VaccineScreen';
import africa from '../images/africa-map.svg';
import '../App.css';
import HeaderComp from '../components/HeaderComp';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.vaccine);
  const peopleVaccinated = [];
  let totalVaccinated = 0;
  reports.map((total) => peopleVaccinated.push(total.All.people_vaccinated));
  for (let i = 0; i < peopleVaccinated.length; i += 1) {
    totalVaccinated += peopleVaccinated[i];
  }

  const getCountry = (e) => {
    const vaccinated = e.target.parentNode.parentNode.parentNode;
    const vaccineId = vaccinated.getAttribute('data-id');
    dispatch(fetchCountry(vaccineId));
  };
  useEffect(() => {
    dispatch(fetchVacinated());
  }, []);
  return (
    <div data-testid="home">
      <HeaderComp title="Africa" />
      <div className="hero-wrapper container-fluid">
        <div className="hero-img-display">
          <img src={africa} alt="map of africa" />
        </div>
        <div className="header-wrapper">
          <h1>Africa</h1>
          <h3>{` ${totalVaccinated.toLocaleString()} Vaccinated`}</h3>
        </div>
      </div>
      <div className="sorted-bar">
        <h1>STATS BY COUNTRY</h1>
      </div>
      <div className="home-wrapper row g-0">
        {reports
        && reports.filter((item) => item.All.country.toLowerCase()).map((vaccine) => (
          <VaccineScreen
            vaccine={vaccine}
            key={vaccine.All.country}
            getCountry={getCountry}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
