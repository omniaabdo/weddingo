import React from 'react';
import photo15 from '../assets/img/15.jpeg';
import '../assets/css/service-detail.css';

export default function ServiceDetail() {
  return (
    <div className='service'>
      <img src={photo15} alt="logo" className='card-img'/>
      <div className='card-data'>
        <h4>مكان 443</h4>
        <h5>باسيوط الجديده بعد الكبرى الكبير باسيوط الجديده بعد الكبرى الكبير باسيوط الجديده بعد الكبرى الكبير</h5>
        <p>23000</p>
        <p>متاح من 8: 10 مساءا يوميا</p>
      </div>
    </div>
  );
};

