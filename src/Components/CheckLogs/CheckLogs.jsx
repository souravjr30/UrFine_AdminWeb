import React from 'react'
import CheckLogsContent from './CheckLogsContent'
import Sidebar from '../Dashboard/Sidebar'

const CheckLogs = () => {
  return (
    <div className="check-up">
        <Sidebar/>
        <div className="content">
            <CheckLogsContent/>
        </div>
    </div>
  )
}
export default  CheckLogs;