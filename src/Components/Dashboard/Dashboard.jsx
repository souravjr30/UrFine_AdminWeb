/*import React from 'react';
import './Dashboard.css';
import { Sidebar } from './sidebar';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
  )
}
export default Dashboard;
*/

import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar'; // Import the default export
import Content from './Content';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <Content />
      </div>
    </div>
  );
}

export default Dashboard;
