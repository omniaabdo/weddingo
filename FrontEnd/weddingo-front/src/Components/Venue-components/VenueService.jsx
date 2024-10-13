import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import '../../assets/css/Venueform.css'; // Import the CSS file for custom styles
import { Button, Col, Form, Row } from "react-bootstrap";
import MinBreadcrumb from "../MinBreadcrumb";
import AvailabilityForm from "../photographer-components/AvailabilityForm";
import FeatureForm from "../photographer-components/FeatureForm";
const VenueForm = ({ onSubmit }) => {
  const [venueData, setVenueData] = useState({
    name: '',
    location: '',
    capacity: '',
    description: '',
    availableDates: [],
    phone: '',
      facebook: '',
      imstgram: '',
  });

  const [selectedDates, setSelectedDates] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenueData({
      ...venueData,
      [name]: value,
    });
  };

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
    setVenueData({
      ...venueData,
      availableDates: dates.map((date) => format(date, 'yyyy-MM-dd')),
    });
  };
const handleFraturesData = (data) => {
    setFormData({ ...venueData, feature: data });
  };
 const handleSelectedDates = (data) => {
    setFormData({ ...venueData, availableDate: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(venueData);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add or Update Venue</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Left Column: Basic Information */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={venueData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={venueData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Capacity Up To</label>
              <input
                type="number"
                className="form-control"
                name="capacity"
                value={venueData.capacity}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                value={venueData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
                <Col md={6} className="mb-3">
                    <FeatureForm handleFraturesData={handleFraturesData} />
                  </Col>
            </div>
          </div>

          {/* Right Column: Contact Information */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={venueData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Facebook</label>
              <input
                type="text"
                className="form-control"
                name="socialMedia"
                value={venueData.socialMedia}
                onChange={handleChange}
                required
              />

                      </div>
                      <div className="mb-3">
              <label className="form-label">Instgram</label>
              <input
                type="text"
                className="form-control"
                name="socialMedia"
                value={venueData.socialMedia}
                onChange={handleChange}
                required
              />
            </div>

          </div>
          <div>
             <Col md={12}>
                    <div className="card px-3 my-1">
                      <AvailabilityForm
                        handleSelectedDates={handleSelectedDates}
                      />
                    </div>
                  </Col>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default VenueForm;
