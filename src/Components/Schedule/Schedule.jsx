import React from 'react'
import Sidebar from '../Dashboard/Sidebar';
import ContentSchedule from  './ContentSchedule';
const Schedule = () => {
  return (
    <div className="schedule">
        <Sidebar/>
        <div className="content-schedule">
            <ContentSchedule/>
        </div>
    </div>
  )
}
export default Schedule;
