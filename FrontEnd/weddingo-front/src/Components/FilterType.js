import React, { useState } from "react";
import "../assets/css/filters.css";

export default function FilterType({ onStatusFilterChange }) {
  const handleStatusChange = (event, value) => {
    onStatusFilterChange(value);
  };
  return (
    <>
      <div className="filter-div">
        <p className="filter-div_title">النوع</p>
        <ul className="filter-div_list">
          <li>
            <input
            type="radio"
            name="status"
            onClick={(e) => handleStatusChange(e, 'open')}
          />
            <label>مفتوحة </label>
          </li>
          <li>
            <input
            type="radio"
            name="status"
            onClick={(e) => handleStatusChange(e, 'close')}
          />
            <label>مغلقة</label>
          </li>
        </ul>
      </div>
    </>
  );
}
export  function FilterCapacity({ onFilterChange }) {
  const handleCheckboxChange = (event, value) => {
    onFilterChange(value);
  };
  return (
    <>
      <div className="filter-div">
        <p className="filter-div_title">سعة الاشخاص</p>
        <ul className="filter-div_list">
        <li>
          <input
            type="radio"
            name="range"
            onClick={(e) => handleCheckboxChange(e, '0-99')}
          />
          <label>0-99</label>
        </li>
        <li>
          <input
            type="radio"
            name="range"
            onClick={(e) => handleCheckboxChange(e, '100-349')}
          />
          <label>100-349</label>
        </li>
        <li>
          <input
            type="radio"
            name="range"
            onClick={(e) => handleCheckboxChange(e, '350-400')}
          />
          <label> 350-400 </label>
        </li>
        </ul>
      </div>
    </>
  );
}
export  function FilterPrice({start, onPriceFilterChange}) {
  const handleCheckboxChange = (event, value) => {
    onPriceFilterChange(value);
  };
  return (
    <>
      <div className="filter-div">
        <p className="filter-div_title">الاسعار </p>
        <ul className="filter-div_list">
          <li>
            <input
            type="radio"
            name="priceRang"
            onClick={(e) => handleCheckboxChange(e, '1000')}
          />
            <label>تحت  {start * 1} جنيها </label>
          </li>
          <li>
            <input
            type="radio"
            name="priceRang"
            onClick={(e) => handleCheckboxChange(e, '1000-3000')}
          />
            <label>
            {start * 1} جنيها   - {start * 3} جنيها  </label>
          </li>
          <li>
            <input
            type="radio"
            name="priceRang"
            onClick={(e) => handleCheckboxChange(e, '3000-5000')}
          />
            <label> {start * 3} جنيها   - {start * 5} جنيها  </label>
          </li>
          <li>
            <input
            type="radio"
            name="priceRang"
            onClick={(e) => handleCheckboxChange(e, 'null-5000')}
          />
            <label> {start * 5} جنيها + </label>
          </li>
        </ul>
      </div>
    </>
  );
}

export  function FilterCarType({ onCarTypeFilterChange }) {
  const handleCarTypeChange = (event, value) => {
    onCarTypeFilterChange(value);
  };
  return (
    <>
      <div className="filter-div">
        <p className="filter-div_title">نوع السيارة </p>
        <ul className="filter-div_list">
          <li>
            <input
            type="radio"
            name="carType"
            onClick={(e) => handleCarTypeChange(e, 'كابورلية')}
          />
            <label> كابورلية </label>
          </li>
          <li>
            <input
            type="radio"
            name="carType"
            onClick={(e) => handleCarTypeChange(e, 'هاتش باك')}
          />
            <label> هاتش باك</label>
          </li>
          <li>
            <input
            type="radio"
            name="carType"
            onClick={(e) => handleCarTypeChange(e, 'سيدان')}
          />
            <label> سيدان</label>
          </li>
        </ul>
      </div>
    </>
  );
}



