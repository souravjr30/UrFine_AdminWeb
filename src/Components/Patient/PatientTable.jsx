import React , { useState, useEffect} from 'react'
import './table.css'
import { FaClipboardCheck } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PatientTable = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://urfine-backend.onrender.com/userinfo?userId=zf4ljXI4HpQ9Z3e7ENzWBIBw8tu2');
        
        setPatients(response.data.userInfo || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="main">
        <div className="main-container">
            <h1>Patient Information</h1>
            <div className="patients">
            <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Blood Group</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Checkup Logs</th> 
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td>{patient._userID}</td>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.bloodGroup}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.address}</td>
                  <td>
                    <FaClipboardCheck className='medical-checkup' onClick={() => navigate('/checkLogs')}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
        </div>
    </div>
  )
}
export default PatientTable;

/* import React, { useState, useEffect } from 'react';
import './table.css';
import { FaClipboardCheck } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PatientTable = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data of all users
        const userDataResponse = await axios.get('https://urfine-backend.onrender.com/userdata');
        const userData = userDataResponse.data;

        // Fetch data of each user using their userID
        const promises = userData.map(async (user) => {
          const userInfoResponse = await axios.get(`https://urfine-backend.onrender.com/userinfo?_userID=${user._userID}`);
          return userInfoResponse.data;
        });

        // Wait for all user info requests to resolve
        const usersInfo = await Promise.all(promises);
        setPatients(usersInfo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="main-container">
        <h1>Patient Information</h1>
        <div className="patients">
          <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Blood Group</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Checkup Logs</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td>{patient._userID}</td>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.bloodGroup}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.address}</td>
                  <td>
                    <FaClipboardCheck className='medical-checkup' onClick={() => navigate('/checkLogs')} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientTable;
 */