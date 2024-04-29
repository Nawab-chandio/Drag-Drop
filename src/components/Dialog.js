// src/Dialog.js
import React, { useState } from 'react';
import './Dialog.css';

const Dialog = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    email: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Close the dialog
    onClose();
  };

  return (
    <div className="dialog">
      <div className="dialog-content">
        <h2>Create Dialog</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Number:</label>
            <input type="number" name="number" value={formData.number} onChange={handleChange} required />
          </div>
          <div className="button-group">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dialog;
