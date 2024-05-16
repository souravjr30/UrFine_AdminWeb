import React, { useState , useEffect} from 'react';
import "./card.css";
import { IoClose } from "react-icons/io5";
import Calendar from 'react-calendar';
import './Calender.css'
import axios from 'axios';

const cards = [
    {
        name: "Bookings",
        total: 21,
        description: "Due Tasks",
        footer: "Completed: 13",
        more_info: "Booking requests are processed based on patient priority, considering the severity of their condition and slot availability.",
    },
    {
        name: "Schedule",
        description:"Upcoming Checkup",
        date: null
    },
    {
        name: "Total Users",
        total: 0,
        description: "Current Active Users",
        footer: "Past One week: 10",
        more_info: "The total number of users encompasses both past and present individuals who have utilized the application. Users maintain access as long as they remain logged in",
    }
];

const Card = () => {
    const [date, setDate] = useState(new Date());
    const [userCount, setUserCount] = useState(0);
    const [checkupCount, setRequestCount] = useState(0);
    const [upcomingDate, setUpcomingDate] = useState(null);

    useEffect(() => {
       
        axios.get('https://urfine-backend.onrender.com/userdata/count')
            .then(response => {
                
                setUserCount(response.data.userCount);
            })
            .catch(error => {
                console.error('Error fetching total users:', error);
            });

            
        axios.get('https://urfine-backend.onrender.com/checkups/count')
        .then(response => {
            setRequestCount(response.data.checkupCount);
        })
        .catch(error => {
            console.error('Error fetching total request count:', error);
        });
        axios.get('https://urfine-backend.onrender.com/checkups/accepted/date')
            .then(response => {
                setUpcomingDate(response.data.UpcomingDate);
            })
            .catch(error => {
                console.error('Error fetching accepted date:', error);
            });
    }, []);

    return (
        <div className="cards">
            {cards.map((card) => (
                <label key={card.name} id={card.name}>
                    <input type="checkbox" style={{ display: 'none' }} />
                    <div className="card">
                        <div className="front">
                            <header>
                                <h2 className='front-title'>{card.name}</h2>
                            </header>
                            
                            <h3 className='total'>{card.name === 'Total Users' ? userCount : card.name === 'Bookings' ? checkupCount : card.total}{/* {card.name === 'Total Users' ? userCount : card.total} */}</h3>
                            <div className="footer">
                                <h4>{card.description}</h4>
                                <h5>{card.footer}</h5>
                                
                            </div>
                            {card.name === 'Schedule' && upcomingDate && <h1>{upcomingDate}</h1>}
                            {/* {acceptedDate && <p>Accepted Date: {acceptedDate.toString()}</p>}
                            {card.date && <p>Date: {card.date.toString()}</p>} */}
                        </div>
                        <div className="back">
                            <header>
                                <h4>{card.name}</h4><IoClose className='icon' />
                            </header>
                            {card.name === 'Schedule' && (
                                <div className="calendar">
                                    <Calendar
                                        onChange={setDate}
                                        value={date}
                                        className="custom-calender"
                                        
                                    />
                                    {/* {acceptedDate && <p>Accepted Date: {acceptedDate.toString()}</p>}
                                    {card.date && <p>Date: {card.date.toString()}</p>} */}
                                </div>
                            )}
                            <div className="back-info">
                                <p>{card.more_info}</p>
                            </div>
                        </div>
                    </div>
                </label>
            ))}
        </div>
    );
}

export default Card;
