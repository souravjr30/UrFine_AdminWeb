import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { GrSchedule } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const ContentHeader = () => {
    const navigate = useNavigate();
  return (
    <div className="content--header">
        <div className="header--activity">
            <div className="search-box">
                <input type='text' placeholder='Search...' />
                <BiSearch className='icon'/>
            </div>
            <div className="notify">
                <GrSchedule className='icon' onClick={() => navigate('/schedule')}/>
            </div>
            <div className="profile">
                <h3 className='profile-name'>ARUN</h3>
                <RxAvatar className='icon'/>
            </div>
        </div>
    </div>
  )
}
export default  ContentHeader;