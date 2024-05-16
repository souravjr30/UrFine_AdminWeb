import React from 'react'
import "../Dashboard/Content.css";
import ContentHeader from '../Dashboard/ContentHeader';
import ContentSchMain  from './ContentSchMain';
const ContentSchedule = () => {
  return (
    <div className="content-class">
        <ContentHeader/>
        <ContentSchMain/>
    </div>
  )
}
export default  ContentSchedule;