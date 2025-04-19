// RegistrationForm.js

import React, { useState } from "react";
import "./RegistrationForm.css";
import Navbar from "../navbar/Navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom"; // Import useHistory hook

function RegistrationForm() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    userName: "",
    password: "",
    shippingAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to login page
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="registration-container">
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="column">
            <h2>Create an Account</h2>
            <div className="input-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="column">
            <br />
            <br />
            <br />

            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Delivery Address:</label>
              <textarea
                id="shippingAddress"
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
