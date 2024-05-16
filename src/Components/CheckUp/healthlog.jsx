import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Healthlog = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [newLogText, setNewLogText] = useState('');
  const [additionalLogText, setAdditionalLogText] = useState('');
  const [frameLabel, setFrameLabel] = useState('Health Logs');
  const [showBottomBox, setShowBottomBox] = useState(true);
  const [showAdditionalBox, setShowAdditionalBox] = useState(false); // New state variable for additional box visibility
  
const [normalValue, setNormalValue] = useState('');
const [currentValue, setCurrentValue] = useState('');
const location = useLocation();
  const { card } = location.state;

  const [userId, setUserId] = useState(card?._userID);

  const frameStyle = {
    height: '131.75px',
    width: '944px',
    border: '1px solid #000', // Just for visualization, you can remove this border
    /* margin: 'auto',  */// Center the box horizontally
    marginLeft: '500px',
    marginTop: '50px',
    /* marginTop: 'calc(50vh - 65.875px)', */ // Center the box vertically
    position: 'relative', // Positioning for absolute elements
    display: 'flex', // Use flexbox for horizontal alignment
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Distribute space evenly between items
    borderRadius: '24px'
  };

  const labelStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#FF7F61',
    position: 'absolute',
    left: '15px',
    top: '2%',
    transform: 'translateY(-50%)', // Center vertically
  };

  const popuplabel = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#FF7F61',
  };

  const addButtonStyle = {
    fontSize: '20px',
    backgroundColor: '#FF7F61',
    color: '#fff',
    border: 'none',
    borderRadius: '13px',
    width: '168px',
    height: '44px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '15px',
    top: '20%',
    transform: 'translateY(-50%)', // Center vertically
  };

  const boxlabelStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    left: '8px',
    color: '#585858',
    position: 'absolute',
    transform: 'translateY(-50%)', // Center vertically
  };

  const bottomBoxStyle = {
    width: '844px', // Take up full width of the frame
    height: '41px', // Specify height of the bottom box
    backgroundColor: '#FFFFFF', // Example background color
    position: 'absolute',
    bottom: '10px', // Position at the bottom
    borderRadius: '22px', // Rounded corners for bottom edge
    left: '50px',
    border: '1px solid #585858',
    display: showBottomBox ? 'block' : 'none', // Conditionally render the bottom box
  };

  const popupStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    display: showPopup ? 'block' : 'none',
    width: '500px',
    height: '200px',
  };

  const secondPopupStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    display: showSecondPopup ? 'block' : 'none',
    width: '500px',
    height: '300px',
  };

  const inputContainerStyle = {
    marginTop: '20px', // Adjust the margin to create space between label and input
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    marginTop: '8px',
  };

  const addButtonBottomStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#FF7F61',
    color: '#fff',
    border: 'none',
    borderRadius: '13px',
    padding: '12px 24px',
    cursor: 'pointer',
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openSecondPopup = () => {
    setShowSecondPopup(true);
  };

  const closeSecondPopup = () => {
    setShowSecondPopup(false);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'add') {
      /* openSecondPopup(); */
      setShowSecondPopup(true);
    } else {
      // Otherwise, close the second popup
      setShowSecondPopup(false);
    }
    
  };

  const handleNewLogInputChange = (event) => {
    setNewLogText(event.target.value);
  };

  const handleAdditionalLogInputChange = (event) => {
    setAdditionalLogText(event.target.value);
  };

  
    
    const handleAddLog = async () => {
        try {
          const logData = {
            healthlog: [
              {
                label: newLogText,
                normal_value: normalValue,
                current_value: currentValue
              }
            ]
          };
      
          const response = await axios.post('https://urfine-backend.onrender.com/historylogs?userId=${userId}', logData);
      
          if (response.status === 200) {
            /* console.log('Log entry added successfully'); */
            // Optionally, you can reset the state variables or perform any other actions after successful submission
            setNewLogText('');
            setNormalValue('');
            setCurrentValue('');
            setShowSecondPopup(false);
            setShowPopup(false);
            setFrameLabel('Updated Health Logs');
            setShowBottomBox(false);
            setShowAdditionalBox(true);
          } else {
            console.error('Failed to add log entry');
          }
        } catch (error) {
          console.error('Error while adding log entry:', error);
        }
      };
  

  const handleNormalValueInputChange = (event) => {
    setNormalValue(event.target.value);
  };
  
  const handleCurrentValueInputChange = (event) => {
    setCurrentValue(event.target.value);
  }


  return (
    <div style={frameStyle}>
      <p style={labelStyle}>{frameLabel}</p>
      <button style={addButtonStyle} onClick={() => setShowPopup(true)}>Add Log +</button>
      <div style={bottomBoxStyle}>
        <p style={boxlabelStyle}>Click add log for new health log entry</p>
      </div>
      {showPopup && (
        <div style={popupStyle}>
          <h2 style={popuplabel}>Select Log</h2>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select from dropdown</option>
            <option value="add">Add New Log +</option>
          </select>
        </div>
      )}
      {showSecondPopup && (
        <div style={secondPopupStyle}>
          <h2 style={popuplabel}>Add New Log</h2>
          <div style={inputContainerStyle}>
            <label htmlFor="newLogText">Name:</label>
            <br />
            <input
              type="text"
              id="newLogText"
              value={newLogText}
              onChange={handleNewLogInputChange}
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="normalValue">Normal Value:</label>
            <br />
            <input
              type="text"
              id="normalValue"
              value={normalValue}
              onChange={handleNormalValueInputChange}
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="currentValue">Current Value:</label>
            <br />
            <input
              type="text"
              id="currentValue"
              value={currentValue}
              onChange={handleCurrentValueInputChange}
              style={inputStyle}
            />
          </div>
          <button style={addButtonBottomStyle} onClick={handleAddLog}>Add</button>
        </div>
      )}
      
      {/* {showAdditionalBox && (
        <div style={{width: '844px', height: '41px', backgroundColor: '#FFFFFF',position: 'absolute',
        bottom: '10px', borderRadius: '22px',left: '50px',border: '1px solid #585858',textAlign: 'center', }}>
          <h3 style={{fontFamily: 'Inter, sans-serif',fontSize: '28px',color: '#FF7F61',left: '5px',}}>{newLogText}</h3>
        </div> */}
        {showAdditionalBox && (
  <div style={{width: '844px', height: '41px', backgroundColor: '#FFFFFF',position: 'absolute',
  bottom: '10px', borderRadius: '22px',left: '50px',border: '1px solid #585858',textAlign: 'center', }}>
    <h3 style={{fontFamily: 'Inter, sans-serif',fontSize: '28px',color: '#FF7F61',left: '5px',}}>{newLogText}</h3>
    <p>Current Value: {currentValue}</p>
    <p>Normal Value: {normalValue}</p>
  </div>
)}

      
      {children}
    </div>
  );
};

export default Healthlog;