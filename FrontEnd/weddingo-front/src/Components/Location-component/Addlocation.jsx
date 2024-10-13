import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Row } from "react-bootstrap";
import FeatureForm from "../photographer-components/FeatureForm";
import AvailabilityForm from "../photographer-components/AvailabilityForm";

const LocationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        availableFrom: '',
        availableTo: '',
        features: {
            feature1: false,
            feature2: false,
            feature3: false,
            feature4: false,
            feature5: false,
        },
        phoneNumber: '',
        facebookLink: '',
        instagramLink: '',
        city: '',
       
    });
const handleFraturesData = (data) => {
    setFormData({ ...formData, feature: data });
  };
 const handleSelectedDates = (data) => {
    setFormData({ ...formData, availableDate: data });
  };
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                features: { ...prevData.features, [name]: checked },
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
    };

    return (
        <div className="container mt-5">
            <h2 >Add Photo Session Location</h2>
            <form onSubmit={handleSubmit} >
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className=" shadow-sm p-3" style={{ opacity: 0.6 }}>
                            <h4>Basic Information</h4>
                            <div className="form-group mb-3">
                                <label>Location Name</label>
                                <input
                                    type="text"
                                    className="form-control mt-2" // Added mt-2 for spacing
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Description</label>
                                <textarea
                                    className="form-control mt-2" // Added mt-2 for spacing
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <h5>Features</h5>
                            <div className="mb-3">
                <Col md={6} className="mb-3">
                    <FeatureForm handleFraturesData={handleFraturesData} />
                  </Col>
            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="shadow-sm p-3" style={{ opacity: 0.6 }}>
                            <h4>Contact Information</h4>
                            <div className="form-group mb-3">
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control mt-2" // Added mt-2 for spacing
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Facebook Link</label>
                                <input
                                    type="url"
                                    className="form-control mt-2" // Added mt-2 for spacing
                                    name="facebookLink"
                                    value={formData.facebookLink}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Instagram Link</label>
                                <input
                                    type="url"
                                    className="form-control mt-2" // Added mt-2 for spacing
                                    name="instagramLink"
                                    value={formData.instagramLink}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>City</label>
                                <input
                                    type="text"
                                    className="form-control mt-2" // Added mt-2 for spacing
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                 <div>
             <Col md={12}>
                    <div className="shodow-sm p-3 px-3 my-1">
                      <AvailabilityForm
                        handleSelectedDates={handleSelectedDates}
                      />
                    </div>
                  </Col>
          </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LocationForm;
