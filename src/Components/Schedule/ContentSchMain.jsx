import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContentSchMain = () => {
  const [serviceCards, setServiceCards] = useState([]);
  const [sortedAsc, setSortedAsc] = useState(true);
  const navigate = useNavigate();

  const handleCheckupClick = (card) => {
    console.log("card",card);
    // Navigate to CheckContentMain with checkup ID as a prop
    navigate(`/checkup/${card._id}`,{
      state:{card:card}
    }); // Assuming you have imported navigate from 'react-router-dom'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://urfine-backend.onrender.com/checkups/accepted');
        // console.log("response",response.data)
        setServiceCards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const sortedServiceCards = [...serviceCards].sort((a, b) => {
    const dateA = new Date(
      a.sheduledTo.split('-').reverse().join('-')
    );
    const dateB = new Date(
      b.sheduledTo.split('-').reverse().join('-')
    );
  
    if (sortedAsc) {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
  

  const handleSortToggle = () => {
    setSortedAsc(!sortedAsc);
  };

  return (
    <div className="main">
      <div className="main-container">
        <h1>Upcoming Schedule</h1>
        <div className="schedule-header">
          <button className="schedule-header-item" onClick={handleSortToggle}>
            <span>Date</span>
            <span>{sortedAsc ? "▲" : "▼"}</span>
          </button>
        </div>
        {sortedServiceCards.map((card, index) => (
          <div className="services" key={index}>
            <h4>User ID: {card._userID}</h4>
            <h4>Details: {card.details}</h4>
            <h4>Scheduled To: {card.sheduledTo}</h4>
            <button  onClick={() => handleCheckupClick(card)}>Check-Up</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSchMain;
