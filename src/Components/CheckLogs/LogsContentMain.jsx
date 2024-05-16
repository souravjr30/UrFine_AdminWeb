/* import React from 'react';
import './CheckLogs.css';
const LogsContentMain = ({ formData = {}, equipments = [], medicines = [] }) => {
  const {
    name = "",
    age = "",
    gender = "",
    sugarLevel = "",
    bloodPressure = "",
    spo2 = "",
    description = "",
    doctor = ""
  } = formData;

  return (
    <div className="main">
        <div className="main-container">
            <h2>Check Up Information</h2>
            <div className="check-up-info">
                <div className="grid-container">
                <div className="grid-item"><strong>Name :</strong> {name}</div>
                <div className="grid-item"><strong>Age :</strong> {age}</div>
                <div className="grid-item"><strong>Gender :</strong> {gender}</div>
                <div className="grid-item"><strong>Sugar Level :</strong> {sugarLevel}</div>
                <div className="grid-item"><strong>Blood Pressure :</strong> {bloodPressure}</div>
                <div className="grid-item"><strong>Sp02 :</strong> {spo2}</div>
                <div className="grid-item"><strong>Description :</strong> {description}</div>
                <div className="grid-item"><strong>Doctor in Charge :</strong> {doctor}</div>
                   
                <div className="grid-item equipments-container">
                
                    <h4>Equipments Needed :</h4>
                    <ul>
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment.name} - Qty: {equipment.quantity}</li>
                    ))}
                    </ul>
                </div>
                <div className="grid-item medicines-container">
                
                    <h4>Medicines Prescribed :</h4>
                    <ul>
                    {medicines.map((medicine, index) => (
                        <li key={index}>{medicine.name} - Qty: {medicine.quantity}</li>
                    ))}
                    </ul>
                </div>
                 
                </div>
                
                
                </div>
                </div>
    </div>
  );
};

export default LogsContentMain; */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CheckLogs.css';

const LogsContentMain = () => {
  const [checkupResults, setCheckupResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://urfine-backend.onrender.com/checkups/result?userId=i2A98OmjQuWZUVWNAkAJZrNMtx22');
        const { data } = response;
        setCheckupResults(data.checkupResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="main-container">
        <h2>Check Up Information</h2>
        {checkupResults.map((checkup, index) => (
          <div className="check-up-info" key={index}>
            <h3>Checkup {index + 1}</h3>
            <div className="grid-container">
              <div className="grid-item"><strong>Description:</strong> {checkup.description}</div>
              <div className="grid-item"><strong>Doctor in Charge:</strong> {checkup.doctor_incharge}</div>
              <div className="grid-item">
                <strong>Assistance:</strong> {checkup.assistance.join(', ')}
              </div>
              <div className="grid-item equipments-container">
                <h4>Equipments Needed:</h4>
                <ul>
                  {checkup.equipment.map((equipment, index) => (
                    <li key={index}>{equipment.name} - Qty: {equipment.quantity}</li>
                  ))}
                </ul>
              </div>
              <div className="grid-item medicines-container">
                <h4>Medicines Prescribed:</h4>
                <ul>
                  {checkup.medicine.map((medicine, index) => (
                    <li key={index}>{medicine.name} - Qty: {medicine.quantity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogsContentMain;


