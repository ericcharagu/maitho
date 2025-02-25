// ModalForms.jsx
import React, { useState } from 'react';
import axios from 'axios';

export const GetStartedModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    location: '',
    camerasInstalled: 'yes',
    estimateRange: '1-50'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   await axios.post('http://localhost:3000/api/get-started', formData);
      alert('Form submitted successfully!');
      onClose();
    } catch (error) {
      alert('Error submitting form');
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Get Started with Maitho</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="business">Business Name</label>
            <input
              type="text"
              id="business"
              value={formData.business}
              onChange={(e) => setFormData({...formData, business: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cameras">Cameras Installed</label>
            <select
              id="cameras"
              value={formData.camerasInstalled}
              onChange={(e) => setFormData({...formData, camerasInstalled: e.target.value})}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="estimate">Estimated Number of Cameras Needed</label>
            <select
              id="estimate"
              value={formData.estimateRange}
              onChange={(e) => setFormData({...formData, estimateRange: e.target.value})}
            >
              <option value="1-50">1-50</option>
              <option value="51-100">51-100</option>
              <option value="101-200">101-200</option>
              <option value="201-500">201-500</option>
              <option value="500+">500+</option>
            </select>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export const DemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/request-demo', formData);
      alert('Demo request submitted successfully!');
      onClose();
    } catch (error) {
      alert('Error submitting form');
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Request a Demo</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="demo-name">Name</label>
            <input
              type="text"
              id="demo-name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="demo-email">Email</label>
            <input
              type="email"
              id="demo-email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="submit-button">Request Demo</button>
        </form>
      </div>
    </div>
  );
};