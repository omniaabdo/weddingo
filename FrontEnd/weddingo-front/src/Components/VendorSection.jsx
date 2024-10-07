import React from "react";
import { Carousel, Card, Button, Form } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // For custom arrow icons
import "../assets/css/Vendor.css"; // Import custom CSS
import img from "../assets/img/services/venue.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const VendorSection = () => {
  const venues = [
    {
      title: "The Ashford Estate",
      rating: 4.9,
      reviews: 52,
      location: "Allentown, NJ",
      image: img,
    },
    {
      title: "Windows on the Water",
      rating: 5.0,
      reviews: 100,
      location: "Millstone ",
      image: img,
    },
    {
      title: "Palace Hall",
      rating: 4.8,
      reviews: 40,
      location: "Toms River, NJ",
      image: img,
    },
    {
      title: "Palace Hall",
      rating: 4.8,
      reviews: 40,
      location: "Toms River, NJ",
      image: img,
    },
    // Add more venues as needed
  ];

  const vendors = [
    {
      title: "FIG catering",
      rating: 4.8,
      reviews: 85,
      location: "Colts Neck, NJ",
      image: img,
    },
    {
      title: "Ultimate Caterer",
      rating: 4.6,
      reviews: 116,
      location: "Marlboro, NJ",
      image: img,
    },
    {
      title: "Haute Feast",
      rating: 5.0,
      reviews: 10,
      location: "Asbury Park, NJ",
      image: img,
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
    <section>
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
                prevIcon={
                  <FaChevronLeft className="custom-carousel-arrow-left" />
                }
                nextIcon={
                  <FaChevronRight className="custom-carousel-arrow-right" />
                }
              >
                {chunkArray(venues, 3).map((venueGroup, index) => (
                  <Carousel.Item key={index}>
                    <div className="d-flex justify-content-between">
                      {venueGroup.map((venue, idx) => (
                        <Card
                          className="mx-2"
                          key={idx}
                          style={{ width: "30%" }}
                        >
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
              <Button variant="info" className="mt-3">
                Search for venues
              </Button>
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
                prevIcon={
                  <FaChevronLeft className="custom-carousel-arrow-left" />
                }
                nextIcon={
                  <FaChevronRight className="custom-carousel-arrow-right" />
                }
              >
                {chunkArray(vendors, 3).map((vendorGroup, index) => (
                  <Carousel.Item key={index}>
                    <div className="d-flex justify-content-between">
                      {vendorGroup.map((vendor, idx) => (
                        <Card
                          className="mx-2"
                          key={idx}
                          style={{ width: "30%" }}
                        >
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
              <Button variant="info" className="mt-3">
                Search for caterers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const VendorSection2 = () => {
  const venues = [
    {
      title: "The Ashford Estate",
      rating: 4.9,
      reviews: 52,
      location: "Allentown, NJ",
      image: img,
    },
    {
      title: "The Ashford Estate",
      rating: 4.9,
      reviews: 52,
      location: "Allentown, NJ",
      image: img,
    },
    {
      title: "Windows on Water",
      rating: 5.0,
      reviews: 100,
      location: "Millstone ",
      image: img,
    },
    {
      title: "Palace Hall",
      rating: 4.8,
      reviews: 40,
      location: "Toms River, NJ",
      image: img,
    },
    {
      title: "Palace Hall",
      rating: 4.8,
      reviews: 40,
      location: "Toms River, NJ",
      image: img,
    },
    // Add more venues as needed
  ];

  const vendors = [
    {
      title: "FIG catering",
      rating: 4.8,
      reviews: 85,
      location: "Colts Neck, NJ",
      image: img,
    },
    {
      title: "Ultimate Caterer",
      rating: 4.6,
      reviews: 116,
      location: "Marlboro, NJ",
      image: img,
    },
    {
      title: "Haute Feast",
      rating: 5.0,
      reviews: 10,
      location: "Asbury Park, NJ",
      image: img,
    },
    // Add more vendors as needed
  ];

  // Helper function to chunk array into groups
  // const chunkArray = (arr, size) => {
  //   const results = [];
  //   for (let i = 0; i < arr.length; i += size) {
  //     results.push(arr.slice(i, i + size));
  //   }
  //   return results;
  // };

  return (
    <section className="profile-vendoer min-section">
      <div className="container">
        <div className="row profile-vendoer_container">
          {/* Venues Section */}
          <div className="col-lg-6 col-sm-12">
            <div className="rounded-container shadow-sm p-4">
                <h5>Find your wedding venue</h5>
              <div className="div-card-subtitle d-flex justify-content-between align-items-center my-3">
              <p>Here are a few gems we recommend for you.</p>
              </div>
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                navigation
                className="profile-vendoer_swiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1, // عرض شريحة واحدة على الشاشات الصغيرة
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1.5, // عرض شريحتين عند العرض أكبر من 640 بكسل
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2.5, // عرض 3 شرائح على الشاشات المتوسطة
                    spaceBetween: 10,
                  },
                }}
              >
                {venues.map((item, index) => (
                  <>
                    <SwiperSlide key={index}>
                      <Card>
                        <div className="card-img-div">
                          <a href="." className="text-decoration-none">
                            <Card.Img variant="top" src={item.image} />
                          </a>
                        </div>
                        <div className="card-text-div">
                          <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <div className="card-text-subtitle text-muted mb-2">
                              <b>
                                ⭐ {item.rating} ({item.reviews})
                              </b>
                              <Card.Text>{item.location}</Card.Text>
                            </div>
                          </Card.Body>
                        </div>
                      </Card>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
              <Button variant="info" className="mt-3">
                Search for venues
              </Button>
            </div>
          </div>

          {/* Vendors Section */}
          <div className="col-lg-6 col-sm-12">
            <div className="rounded-container shadow-sm p-4">
              <h5>Book all your vendors</h5>
              <div className="div-card-subtitle  d-flex justify-content-between align-items-center my-3">
              <p>Read reviews, save favourites, get in touch.</p>
              <Form.Select className="w-auto">
                  <option>Catering</option>
                  <option>Photography</option>
                  <option>Decor</option>
                  <option>Music</option>
                </Form.Select>
              </div>
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                navigation
                className="profile-vendoer_swiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1, // عرض شريحة واحدة على الشاشات الصغيرة
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1.5, // عرض شريحتين عند العرض أكبر من 640 بكسل
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2.5, // عرض 3 شرائح على الشاشات المتوسطة
                    spaceBetween: 10,
                  },
                }}
              >
                {vendors.map((item, index) => (
                  <>
                    <SwiperSlide key={index}>
                      <Card>
                        <div className="card-img-div">
                          <a href="." className="text-decoration-none">
                            <Card.Img variant="top" src={item.image} />
                          </a>
                        </div>
                        <div className="card-text-div">
                          <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <div className="card-text-subtitle text-muted mb-2">
                              <b>
                                ⭐ {item.rating} ({item.reviews})
                              </b>
                              <Card.Text>{item.location}</Card.Text>
                            </div>
                          </Card.Body>
                        </div>
                      </Card>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
              <Button variant="info" className="mt-3">
                Search for venues
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VendorSection2;
