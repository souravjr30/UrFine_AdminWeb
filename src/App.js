/*import Login from "./Components/Login/Login";
import Dashboard from  './Components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import sidebar from "./Components/Dashboard/sidebar"
function App() {
  return (
    <div className="dashboard">
    <sidebar />
    </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact  path="/dashboard" element={<Dashboard  />} ></Route>
      </Routes>
    </Router>
);
}
export default App;
*/
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Booking from "./Components/Bookings/Booking";
import Service from "./Components/Services/Service";
import Checkup from "./Components/CheckUp/Checkup";
import Patient from "./Components/Patient/Patient";
import Schedule from "./Components/Schedule/Schedule";
import CheckLogs from "./Components/CheckLogs/CheckLogs";
import "./App.css";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/checkup/:_id" element= {<Checkup/>} />
          <Route exact path="/patient" element ={<Patient/>} />
          <Route exact path="/schedule"element={<Schedule/>} />
          <Route exact path="/checkLogs" element={<CheckLogs />} />
        </Routes>
    </Router>
  );
}

export default App;








/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/Login/Login";
import Dashboard from  './Components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
*/