import React, { useState } from 'react';
import './ForgotPassword.css';
import Navbar from "../navbar/Navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom"; // Import useHistory hook

function ForgotPassword() {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if(!email.includes('@')){
            setMessage('Please enter a valid email address.');
            return;
        }

        localStorage.setItem('userId', 'static-user-id-123');

        setMessage('Password reset link sent successfully! (simulated)');

        setTimeout(() => {
            navigate("/change-password");
        }, 1500);
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="ForgotPassword">
                <h2>Forgot Your Password?</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Reset Password</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>

    );
}

export default ForgotPassword;