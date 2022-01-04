import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { listVaccine } from '../redux/actions/vaccineActions';

const VaccineScreen = () => {
  const dispatch = useDispatch();

  const vaccineList = useSelector((state) => state.vaccineList);
  const { error, All } = vaccineList;

  useEffect(() => {
    dispatch(listVaccine);
  }, []);

  return (
    <div className="vaccine-screen-container">
      {error && <Message variant="danger">{error}</Message>}
      {All.map((vaccine) => (
        <div key={vaccine.All.country}>
          <div>{vaccine.All.country}</div>
        </div>
      ))}
    </div>
  );
};

export default VaccineScreen;
