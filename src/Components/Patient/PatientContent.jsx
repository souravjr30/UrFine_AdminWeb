import React from 'react';
import "../Dashboard/Content.css";
import ContentHeader from '../Dashboard/ContentHeader';
import PatientTable from './PatientTable';


const PatientContent = () => {
  return (
    <div className='patient-content'>
      <ContentHeader />
      <PatientTable/>
    </div>
  );
}

export default PatientContent;
