import React from 'react'
import ContentHeader from '../Dashboard/ContentHeader';
import LogsContentMain from './LogsContentMain';
import "../Dashboard/Content.css";

const CheckLogsContent = () => {
  return (
    <div className="content-checkup">
        <ContentHeader/>
        <LogsContentMain/>
    </div>
  )
}

export default CheckLogsContent;
