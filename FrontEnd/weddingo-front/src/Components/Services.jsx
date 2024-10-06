import React from 'react';
import '../assets/css/services.css';
import photo1 from '../assets/img/1.png';
import photo2 from '../assets/img/2.jpeg';
import photo3 from '../assets/img/3.jpeg';
import photo4 from '../assets/img/4.jpeg';
import photo6 from '../assets/img/6.jpeg';
import photo8 from '../assets/img/8.jpeg';
import photo14 from '../assets/img/14.jpeg';
import photo15 from '../assets/img/15.jpeg';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div>
      <div className="services">
        <div>
          <h2>
            Wedding Dress Photos
          </h2>
          <p>
            Whether you’re looking for lace or satin, floor-length or short, off-the-shoulder or strapless, WeddingWire has over 8,000 wedding dresses to choose from. You can search for styles in every silhouette, including mermaid, ball gown, a-line and more. Search for beach or vintage-inspired wedding dresses and beyond. WeddingWire lists wedding dresses from more than 100 designers and wedding dress prices ranging from less than $700 to over $5,000.
          </p>
        </div>
        <div className="services-card">
          <div>
            <Link to="service-detail" className='link-service'>
              <img src={photo1} className="card-service" alt="logo" />
              <h4 className="service-card-name">مكان 123</h4>
              <p className="service-card-price">7007</p>
            </Link>
          </div>
          <div>
            <img src={photo2} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 34</h4>
            <p className="service-card-price">78000</p>
          </div>
          <div>
            <img src={photo3} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 7856</h4>
            <p className="service-card-price">10050</p>
          </div>
          <div>
            <img src={photo4} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 56</h4>
            <p className="service-card-price">70000</p>
          </div>
          <div>
            <img src={photo6} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 12</h4>
            <p className="service-card-price">2133</p>
          </div>
          <div>
            <img src={photo8} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 8756</h4>
            <p className="service-card-price">2333</p>
          </div>
          <div>
            <img src={photo14} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 66</h4>
            <p className="service-card-price">30000</p>
          </div>
          <div>
            <img src={photo15} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 443</h4>
            <p className="service-card-price">23000</p>
          </div>
          <div>
            <img src={photo1} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 123</h4>
            <p className="service-card-price">7007</p>
          </div>
          <div>
            <img src={photo2} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 34</h4>
            <p className="service-card-price">78000</p>
          </div>
          <div>
            <img src={photo3} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 7856</h4>
            <p className="service-card-price">10050</p>
          </div>
          <div>
            <img src={photo4} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 56</h4>
            <p className="service-card-price">70000</p>
          </div>
          <div>
            <img src={photo6} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 12</h4>
            <p className="service-card-price">2133</p>
          </div>
          <div>
            <img src={photo8} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 8756</h4>
            <p className="service-card-price">2333</p>
          </div>
          <div>
            <img src={photo14} className="card-service" alt="logo" />
            <h4 className="service-card-name">مكان 66</h4>
            <p className="service-card-price">30000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

