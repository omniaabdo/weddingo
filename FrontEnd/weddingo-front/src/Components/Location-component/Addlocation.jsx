import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/location.css';

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
        images: [],
        video: '',
    });

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
            <h2 className="text-center">Add Photo Section Location</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="border rounded shadow-sm p-3" style={{ opacity: 0.6 }}>
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
                            <div className="form-group mb-3">
                                <label>Available From</label>
                                <input
                                    type="date"
                                    className="form-control mt-2" // Added mt-2 for spacing
                                    name="availableFrom"
                                    value={formData.availableFrom}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Available To</label>
                                <input
                                    type="date"
                                    className="form-control mt-2" // Added mt-2 for spacing
                                    name="availableTo"
                                    value={formData.availableTo}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <h5>Features</h5>
                            <div className="d-flex flex-wrap mb-3">
                                {Object.keys(formData.features).map((feature, index) => (
                                    <div className="form-check me-3" key={index}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name={feature}
                                            checked={formData.features[feature]}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">{`Feature ${index + 1}`}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="border rounded shadow-sm p-3" style={{ opacity: 0.6 }}>
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
                <h4 className="mt-4">Media</h4>
                <div className="form-group mb-3">
                    <label>Upload Images</label>
                    <div className="input-group mb-3">
                        <input
                            type="file"
                            className="form-control"
                            name="images"
                            multiple
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                        </div>
                </div>
                <div className="form-group mb-3">
                    <label>Upload Video</label>
                    <div className="input-group mb-3">
                        <input
                            type="file"
                            className="form-control"
                            name="video"
                            onChange={handleFileChange}
                            accept="video/*"
                        />
                           </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LocationForm;
