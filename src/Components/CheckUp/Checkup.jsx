import React from 'react'
import CheckupContent from './CheckupContent'
import Sidebar from '../Dashboard/Sidebar'

const Checkup = () => {
  return (
    <div className="check-up">
        <Sidebar/>
        <div className="content">
            <CheckupContent/>
        </div>
    </div>
  )
}
export default  Checkup;