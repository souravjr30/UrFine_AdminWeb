import React, { useState , useEffect } from 'react';
import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePickerComponent from './DatePickerComponent';


const ContentMain = () => {
  const [cardsState, setCardsState] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigate = useNavigate();

  const handleCheckupClick = (_id) => {
    // Navigate to CheckContentMain with checkup ID as a prop
    navigate(`/checkup/${_id}`); // Assuming you have imported navigate from 'react-router-dom'
  };


  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get("https://urfine-backend.onrender.com/checkups/requests")
      .then(response => {
        // Update the state with fetched data
        setCardsState(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const handleAccept = () => {
    // Ensure a date is selected
    if (!selectedDate || !selectedId) {
      console.error('Please select a date');
      return;
    }

    // Format the selected date
    const formattedDate = `${selectedDate.getDate()}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`;

    // Send POST request to accept endpoint with req_id and req_date
    axios.post(`https://urfine-backend.onrender.com/checkups/accept?req_id=${selectedId}&req_date=${formattedDate}`)
      .then(response => {
        console.log('Acceptance sent successfully:', response.data);
        // Update the state to reflect the acceptance
        const updatedCards = cardsState.map(card => {
          if (card._id === selectedId) {
            card.isAccepted = true;
            card.acceptMessage = 'Booking accepted!';
            card.sheduledAt = formattedDate; // Assuming sheduledAt is the field for the scheduled date
          }
          return card;
        });
        setCardsState(updatedCards);
        // Reset selected date and ID
        setSelectedDate(null);
        setSelectedId(null);
        setShowDatePicker(false);
      })
      .catch(error => console.error('Error sending acceptance:', error));
  };

  const handleMedicalLogsClick = () => {
    const userId = "user123"; // Specify the user ID here
    // Make a GET request to fetch prescription images
    axios.get(`https://urfine-backend.onrender.com/prescriptions/${userId}`)
      .then(response => {
        // Extract prescription image URLs from the response
        const prescriptionImages = response.data.prescription[0].prescription_image_url;
        // Open a new tab in the browser and load prescription images
        prescriptionImages.forEach(imageUrl => window.open(imageUrl));
      })
      .catch(error => console.error('Error fetching prescription images:', error));
  };
 /*  const handleMedicalLogsClick = (userId) => {
    // Make a GET request to fetch prescription images
    axios.get(`https://urfine-backend.onrender.com/prescriptions/${userId}`)
      .then(response => {
        // Extract prescription image URLs from the response
        const prescriptionImages = response.data.prescription[0].prescription_image_url;
        // Open a new tab in the browser and load prescription images
        prescriptionImages.forEach(imageUrl => window.open(imageUrl));
      })
      .catch(error => console.error('Error fetching prescription images:', error));
  }; */

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  return (
    <div className="main">
      <div className="main-container">
        <h1>Booking Requests</h1>
        {cardsState.map((card, index) => (
          <div className="requests" key={index}>
            <h4 style={{ position: 'relative', top: '10px', marginTop: '30px', marginLeft: '20px' }}>Req Id : {card._id}</h4>
            <h4 style={{ position: 'relative', top: '15px', marginLeft: '20px' }}>User Id : {card._userID}</h4>
            <h4 style={{ position: 'relative', marginLeft: '20px', top: '20px' }}>Details : {card.details}</h4>
            <h4 style={{ position: 'relative', left: '600px', bottom: '85px' }}>SpO2 Level: {card.spO2_level}</h4>
            <h4 style={{ position: 'relative', left: '600px', bottom: '65px' }}>Blood Pressure: {card.blood_pressure}</h4>
            <h4 style={{ position: 'relative', marginLeft: '20px', bottom: '30px' }}>Doctor Needed : {card.requireNeeds.doctor_needed ? 'Yes' : 'No'}</h4>
            <h4 style={{ position: 'relative', marginLeft: '20px', bottom: '20px' }}>Nurse Needed: {card.requireNeeds.nurse_assistance ? 'Yes' : 'No'}</h4>
            <div className="button-container">
              <div className="buttons-main">
              {!card.isAccepted && (
                  <>
                    <button className='button1' onClick={() => { setSelectedId(card._id); setShowDatePicker(true); handleAccept(); }}>Accept</button>
                    {selectedId === card._id &&  showDatePicker && (
                      <DatePickerComponent selectedDate={selectedDate} handleChange={handleDateChange} />
                    )}
                  </>
                )}
                {/* <button className='button1'  onClick={() => handleCheckupClick(card._id)}>Check-Up</button> */}
                {/* <button className='button1' onClick={() => navigate('/checkup')}>Check-Up</button> */}
                <button className='button1'onClick={() => handleMedicalLogsClick()}>Medical Logs</button>
              </div>
            </div>
            {card.acceptMessage && <p>{card.acceptMessage} <TiTick className='tick-icon'/></p>} {/* Show the message if acceptMessage is not empty */}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ContentMain;







/*   
  const handleAccept = (id, scheduledTo) => {
    
    axios.post("https://urfine-backend.onrender.com/checkups/accept?req_id=6622a454515ee981bf1b78d1&req_date=12-04-2024", {
        
        isAccepted: true
    })
    .then(response => {
        console.log('Acceptance sent successfully:', response.data);
        
        const updatedCards = cardsState.map(card => {
            if (card._id === id) {
                card.isAccepted = true;
                card.acceptMessage = 'Booking accepted!';
                card.sheduledTo = scheduledTo;
            }
            return card;
        });
        setCardsState(updatedCards);
    })
    .catch(error => console.error('Error sending acceptance:', error));
}; */