import React, { useState } from 'react';
import './ChangePassword.css';
import Navbar from "../navbar/Navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom"; // Import useHistory hook

function ChangePassword() {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if new password matches confirm password
        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        setMessage('Password changed successfully!');   //static output

        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="ChangePassword">
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit">Change Password</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}

export default ChangePassword;