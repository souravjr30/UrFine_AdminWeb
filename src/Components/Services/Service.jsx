import React from 'react'
import Sidebar from '../Dashboard/Sidebar';
import { ContentService } from './ContentService';

const Service = () => {
  return (
    <div className="service">
        <Sidebar/>
        <div className="content">
            <ContentService/>
        </div>
    </div>
  )
}
export default Service;