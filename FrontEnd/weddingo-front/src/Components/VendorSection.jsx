import React from 'react';
import { Carousel, Card, Button, Form } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // For custom arrow icons
import '../assets/css/Vendor.css'; // Import custom CSS

const VendorSection = () => {
    const venues = [
        {
            title: "The Ashford Estate",
            rating: 4.9,
            reviews: 52,
            location: "Allentown, NJ",
            image: "path_to_ashford_estate_image.jpg",
        },
        {
            title: "Windows on the Water",
            rating: 5.0,
            reviews: 100,
            location: "Millstone ",
            image: "path_to_windows_on_the_water_image.jpg",
        },
        {
            title: "Palace Hall",
            rating: 4.8,
            reviews: 40,
            location: "Toms River, NJ",
            image: "path_to_palace_hall_image.jpg",
        },
        // Add more venues as needed
    ];

    const vendors = [
        {
            title: "FIG catering",
            rating: 4.8,
            reviews: 85,
            location: "Colts Neck, NJ",
            image: "path_to_fig_catering_image.jpg",
        },
        {
            title: "Ultimate Caterer",
            rating: 4.6,
            reviews: 116,
            location: "Marlboro, NJ",
            image: "path_to_ultimate_caterer_image.jpg",
        },
        {
            title: "Haute Feast",
            rating: 5.0,
            reviews: 10,
            location: "Asbury Park, NJ",
            image: "path_to_haute_feast_image.jpg",
        },
        // Add more vendors as needed
    ];

    // Helper function to chunk array into groups
    const chunkArray = (arr, size) => {
        const results = [];
        for (let i = 0; i < arr.length; i += size) {
            results.push(arr.slice(i, i + size));
        }
        return results;
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {/* Venues Section */}
                <div className="col-md-6 mb-4">
                    <div className="rounded-container shadow-sm p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5>Find your wedding venue</h5>
                        </div>
                        <p>Here are a few gems we recommend for you.</p>
                        <Carousel
                            indicators={false}
                            prevIcon={<FaChevronLeft className="custom-carousel-arrow-left" />}
                            nextIcon={<FaChevronRight className="custom-carousel-arrow-right" />}
                        >
                            {chunkArray(venues, 3).map((venueGroup, index) => (
                                <Carousel.Item key={index}>
                                    <div className="d-flex justify-content-between">
                                        {venueGroup.map((venue, idx) => (
                                            <Card className="mx-2" key={idx} style={{ width: '30%' }}>
                                                <a href="." className="text-decoration-none">
                                                    <Card.Img variant="top" src={venue.image} />
                                                </a>
                                                <Card.Body>
                                                    <Card.Title>{venue.title}</Card.Title>
                                                    <div className="text-muted mb-2">
                                                        ⭐ {venue.rating} ({venue.reviews})
                                                    </div>
                                                    <Card.Text>{venue.location}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <Button variant="info" className="mt-3">Search for venues</Button>
                    </div>
                </div>

                {/* Vendors Section */}
                <div className="col-md-6 mb-4">
                    <div className="rounded-container shadow-sm p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5>Book all your vendors</h5>
                            <Form.Select className="w-auto">
                                <option>Catering</option>
                                <option>Photography</option>
                                <option>Decor</option>
                                <option>Music</option>
                            </Form.Select>
                        </div>
                        <p>Read reviews, save favourites, get in touch.</p>
                        <Carousel
                            indicators={false}
                            prevIcon={<FaChevronLeft className="custom-carousel-arrow-left" />}
                            nextIcon={<FaChevronRight className="custom-carousel-arrow-right" />}
                        >
                            {chunkArray(vendors, 3).map((vendorGroup, index) => (
                                <Carousel.Item key={index}>
                                    <div className="d-flex justify-content-between">
                                        {vendorGroup.map((vendor, idx) => (
                                            <Card className="mx-2" key={idx} style={{ width: '30%' }}>
                                                <a href="." className="text-decoration-none">
                                                    <Card.Img variant="top" src={vendor.image} />
                                                </a>
                                                <Card.Body>
                                                    <Card.Title>{vendor.title}</Card.Title>
                                                    <div className="text-muted mb-2">
                                                        ⭐ {vendor.rating} ({vendor.reviews})
                                                    </div>
                                                    <Card.Text>{vendor.location}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <Button variant="info" className="mt-3">Search for caterers</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorSection;
