import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoAddCircle } from "react-icons/io5";
import { useParams, useLocation } from 'react-router-dom';

const CheckContentMain = () => {
  const location = useLocation();
  const { card } = location.state;
  const spo2= card.spO2_level;
  const bloodPressure=card.blood_pressure;
 // console.log("data",spo2,bloodPressure)
  const [checkupData, setCheckupData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    sugarLevel: '',
    bloodPressure: "",
    spo2: "", // Initialize with an empty string
    description: '',
    doctor: '',
  });

  const { _id } = useParams();
  const [assistants, setAssistants] = useState(['']);
  const [equipments, setEquipments] = useState([{ name: '', quantity: '' }]);
  const [medicines, setMedicines] = useState([{ name: '', quantity: '' }]);
  const [userId, setUserId] = useState(card?._userID);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddAssistant = () => {
    setAssistants([...assistants, '']);
  };

  const handleAssistantChange = (index, value) => {
    const newAssistants = [...assistants];
    newAssistants[index] = value;
    setAssistants(newAssistants);
  };

  const handleAddEquipment = () => {
    setEquipments([...equipments, { name: '', quantity: '' }]);
  };

  const handleEquipmentChange = (index, key, value) => {
    const newEquipments = [...equipments];
    newEquipments[index][key] = value;
    setEquipments(newEquipments);
  };

  const handleAddMedicine = () => {
    setMedicines([...medicines, { name: '', quantity: '' }]);
  };

  const handleMedicineChange = (index, key, value) => {
    const newMedicines = [...medicines];
    newMedicines[index][key] = value;
    setMedicines(newMedicines);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // if (!checkupData || !userId) {
    //   console.error("Checkup data not fetched yet");
    //   return;
    // }

    const postData = {
      description: formData.description,
      doctor_incharge: formData.doctor,
      assistance: assistants.filter(assistant => assistant.trim() !== ''),
      equipment: equipments.filter(equipment => equipment.name.trim() !== '' && equipment.quantity !== ''),
      medicine: medicines.filter(medicine => medicine.name.trim() !== '' && medicine.quantity !== ''),
    };
    console.log("postdata",postData)

    await axios.post(`https://urfine-backend.onrender.com/checkups/result/?userId=${userId}`, postData)
      .then(response => {
        console.log('Form data sent successfully:', response.data);
        // Optionally, you can handle success response here
      })
      .catch(error => {
        console.error('Error sending form data:', error);
        // Optionally, you can handle error response here
      });

   // console.log({ formData, assistants, equipments, medicines });

    setFormData({
      name: '',
      age: '',
      gender: '',
      sugarLevel: '',
      bloodPressure: '',
      spo2: '',
      description: '',
      doctor: '',
    });
    setAssistants(['']);
    setEquipments([{ name: '', quantity: '' }]);
    setMedicines([{ name: '', quantity: '' }]);
  };

  return (
    <div className="main">
      <div className="main-container">
        <h1>Check Up</h1>
        <form onSubmit={handleSubmit}>
          <label className='input-field-name'>
            <h4>Name </h4>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className='input-name'
              
            />
          </label>
          <br />
          <label className='input-field-age'>
            <h4>Age </h4>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className='input-age'
            />
          </label>
          <br />
          <label className='input-field-gender'>
            <h4>Gender  </h4>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className='input-gender'
            />
          </label>
          <br />
          <label className='input-field-sugar'>
            <h4>Sugar Level </h4>
            <input
              type="text"
              name="sugarLevel"
              value={formData.sugarLevel}
              onChange={handleInputChange}
              className='input-sugar'
            />
          </label>
          <br />
          <label className='input-field-bp'>
            <h4>Blood Pressure </h4>
            <input
              type="text"
              name="bloodPressure"
              value={card?.blood_pressure}
              onChange={handleInputChange}
              className='input-bp'
            />
          </label>
          <label className='input-field-spo2'>
            <h4>Sp02 </h4>
            <input
              type="text"
              name="spo2"
              value={card?.spO2_level}
              onChange={handleInputChange}
              className='input-spo2'
            />
          </label>
          <br />
          <label className='input-field-desc'>
            <h4>Description </h4>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className='input-desc'
            />
          </label>
          <br />
          <label className='input-field-doctor'>
            <h4>Doctor in Charge </h4>
            <input
              type="text"
              name="doctor"
              value={formData.doctor}
              onChange={handleInputChange}
              className='input-doctor'
            />
          </label>
          <br />
        
          <label className="assistants">
            <h4>Assistants </h4>
            {assistants.map((assistant, index) => (
              <div key={index} className='assistant-item'>
                <input
                  type="text"
                  value={assistant}
                  onChange={(e) => handleAssistantChange(index, e.target.value)}
                  className='input-assistant'
                />
              </div>
            ))}
            <IoAddCircle  className="assistant-button" type="button" onClick={handleAddAssistant}/>
            </label>


          
          
          <div className="equipments">
          <h4>Equipments Needed </h4>
          {equipments.map((equipment, index) => (
            <div key={index} className='equipment-item'>
              <input
                type="text"
                value={equipment.name}
                onChange={(e) => handleEquipmentChange(index, 'name', e.target.value)}
                placeholder="Name"
                className='input-equipment-name'
              />
              <input
                type="number"
                value={equipment.quantity}
                onChange={(e) => handleEquipmentChange(index, 'quantity', e.target.value)}
                placeholder="Qty"
                className='input-equipment-quantity'
              />
            </div>
          ))}
          <IoAddCircle  className="equipment-button" type="button" onClick={handleAddEquipment}/>
          </div>
          
          
          <div className="medicines">
          <h4>Medicines Prescribed</h4>
          {medicines.map((medicine, index) => (
            <div key={index} className='medicine-item'>
              <input
                type="text"
                value={medicine.name}
                onChange={(e) => handleMedicineChange(index, 'name', e.target.value)}
                placeholder="Medicine Name"
                className='input-medicine-name'
              />
              <input
                type="number"
                value={medicine.quantity}
                onChange={(e) => handleMedicineChange(index, 'quantity', e.target.value)}
                placeholder="Qty"
                className='input-medicine-quantity'
              />
            </div>
          ))}
          <IoAddCircle  className="medicine-button" type="button" onClick={handleAddMedicine}/>
          
          </div>
          
          <div className="checkup-button-container">
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckContentMain;
