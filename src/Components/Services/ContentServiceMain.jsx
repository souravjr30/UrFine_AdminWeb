import React, { useState, useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import axios from 'axios';

const initialFormData = {
  profile: "",
  name: "",
  address: "",
  phone: "",
  mobile:"",
  location:  ""
};


const ContentServiceMain = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [serviceCards, setServiceCards] = useState([
    /* {
      profile: "Hospital",
      name: "Mammen Memorial",
      address: "Chengannur",
      phone: "0477-2253597",
      mobile: "+918866666666",
      location: "https://maps.app.goo.gl/example10",
    } */
  ]);

  useEffect(() => {
    // Fetch data from the endpoint
    axios.get('https://urfine-backend.onrender.com/emergencyinfo', {
      params: {
        profile: ['hospital', 'ambulance', 'bloodbank', 'clinic'] // Array of profiles to fetch
      }
    })
      .then(response => {
        console.log('Data fetched successfully:', response.data);
        setServiceCards(response.data.emergency); // Update serviceCards state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle errors here
      });
  }, []); 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddButtonClick = () => {
    axios.post('https://urfine-backend.onrender.com/emergencyinfo', formData)
      .then(response => {
        console.log('Data sent successfully:', response.data);
        setServiceCards([...serviceCards, formData]);
        // Optionally, you can update the UI or perform other actions after successful data submission
      })
      .catch(error => {
        console.error('Error sending data:', error);
        // Handle errors here
      });

    // Reset the form data after submission
    setFormData(initialFormData);
  };

  const handleLocationClick = (location) => {
    window.open(location, "_blank"); // Open the link in a new tab
  };

  const filteredServiceCards = serviceCards.filter(card => {
    const byUserIdOrName = (
      card.profile.toString().includes(searchQuery) ||
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const byType = filterType === "" || card.profile === filterType;

    return byUserIdOrName && byType;
  });

  return (
    <div className="main">
      <div className="main-container">
        <h1>Services</h1>
        <div className="search-filter">
          <div className='search-box-services'>
            <input
              type="text"
              placeholder="Search by Service Type or Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div  className='filter-type-select'>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="">All</option>
              <option value="hospital">Hospital</option>
              <option value="clinic">Clinic</option>
              <option value="ambulance">Ambulance</option>
              <option value="bloodbank">Blood Bank</option>
              
            </select>
        </div>
      </div>
        <div className='add-new'>
          {/* <h2>Add New</h2> */}
          {/* <input
            type="text"
            placeholder="Type"
            name="profile"
            value={formData.profile}
            onChange={handleInputChange}
          /> */}
          <select
            name="profile"
            value={formData.profile}
            onChange={handleInputChange}
          >
            <option value="">Select Profile</option>
            <option value="hospital">Hospital</option>
            <option value="clinic">Clinic</option>
            <option value="ambulance">Ambulance</option>
            <option value="bloodbank">Blood Bank</option>
          </select>

          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          <div className="button-container">
            <button onClick={handleAddButtonClick}>Add</button>
          </div>
        </div>
        {filteredServiceCards.map((card, index) => (
          <div className="services" key={index}>
          

            <h4>{card.profile}</h4>
            <h4>{card.name}</h4>
            <h4>{card.address}</h4>
            <h4>{card.phone}</h4>
            <h4>{card.mobile}</h4>
            <div className='location'>
              <FaLocationDot className='location-icon' onClick={() => handleLocationClick(card.location)}>View Location/</FaLocationDot>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentServiceMain;
 












