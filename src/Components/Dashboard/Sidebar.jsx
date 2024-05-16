import React from 'react'
import "./Sidebar.css"
import { BiHome } from  "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdOutlineMedicalServices ,MdOutlineElderlyWoman} from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
     const navigate = useNavigate();
  return (
    <div className="menu">
        <div className="logo">
            <h1>UrFine</h1>
        </div>
        <div className="menu--list">
            <a href='#' className='item' onClick={() => navigate('/dashboard')}>
                 <BiHome className= "icon"/>
                 Home
            </a>
            <a href='#' className='item' onClick={() => navigate('/booking')}>
                 <SlCalender className='icon'/>
                  Bookings
            </a>
            <a href='#' className='item' onClick={() => navigate('/service')}>
                 <MdOutlineMedicalServices className='icon'/>
                 Services
            </a>
            <a href='#' className='item' onClick={() => navigate('/patient')}>
                 <MdOutlineElderlyWoman className='icon'/>
                 Patients
            </a>
            <a href='#' className='item' onClick={() => navigate('/')}>
                 <CiLogout className='icon'/>
                 Log Out
            </a>
        </div>
    </div>
        
    
    
  )
}
export default  Sidebar;