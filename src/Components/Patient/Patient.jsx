import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import PatientContent from  './PatientContent'
const Patient = () => {
  return (
    <div className="patient">
        <Sidebar />
        <div className="patient-content">
            <PatientContent />
        </div>
    </div>
  )
}
export default Patient;