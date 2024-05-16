import React, { useState } from 'react';
import './Login.css';
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    // State variables for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Specified username and password
    const specifiedUsername = 'souravjraju333'; // Replace with the specified username
    const specifiedPassword = 'ethanhunt007'; // Replace with the specified password

    // Check if the entered username and password match the specified ones
    const isLoginValid = username === specifiedUsername && password === specifiedPassword;

    return (
        <div className='login'>
            <div className="container">
                <img src={logo} alt="Logo" />
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input-main">
                        <input
                            type="text"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-main">
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="submit-container">
                    <div className="submit">
                        <button
                            onClick={() => navigate('/dashboard')}
                            disabled={!isLoginValid}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
