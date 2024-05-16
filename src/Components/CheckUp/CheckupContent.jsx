import React from 'react'
import ContentHeader from '../Dashboard/ContentHeader';
import CheckContentMain from './CheckContentMain';
import "../Dashboard/Content.css";
import Healthlog from './healthlog';

const CheckupContent = () => {
  return (
    <div className="content-checkup">
        <ContentHeader/>
        <CheckContentMain/>
        {/* <Healthlog/> */}
    </div>
  )
}

export default CheckupContent;
