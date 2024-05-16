import React from 'react'
import Sidebar from '../Dashboard/Sidebar';
import Content from './Content';


const Booking = () => {
  return (
    <div className="booking">
        <Sidebar/>
        <div className="booking-content">
            <Content/>
            
        </div>
    </div>
  )
}
export default Booking;