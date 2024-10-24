import React, { useState } from "react";
import "../assets/css/filters.css";

export default function FilterType({ selected, onStatusFilterChange }) {
  const handleStatusChange = (event, value) => {
    onStatusFilterChange(value);
  };

  return (
    <div className="filter-div">
      <p className="filter-div_title">النوع</p>
      <ul className="filter-div_list">
        <li>
          <input
            type="radio"
            name="status"
            checked={selected === "open"} // تحقق مما إذا كان الفلتر محددًا
            onClick={(e) => handleStatusChange(e, "open")}
          />
          <label>مفتوحة </label>
        </li>
        <li>
          <input
            type="radio"
            name="status"
            checked={selected === "close"} // تحقق مما إذا كان الفلتر محددًا
            onClick={(e) => handleStatusChange(e, "close")}
          />
          <label>مغلقة</label>
        </li>
      </ul>
    </div>
  );
}

export function FilterCapacity({ selected, onFilterChange }) {
  const handleCheckboxChange = (event, value) => {
    onFilterChange(value);
  };

  return (
    <div className="filter-div">
      <p className="filter-div_title">سعة الاشخاص</p>
      <ul className="filter-div_list">
        <li>
          <input
            type="radio"
            name="range"
            checked={selected === "0-99"}
            onClick={(e) => handleCheckboxChange(e, "0-99")}
          />
          <label>0-99</label>
        </li>
        <li>
          <input
            type="radio"
            name="range"
            checked={selected === "100-349"}
            onClick={(e) => handleCheckboxChange(e, "100-349")}
          />
          <label>100-349</label>
        </li>
        <li>
          <input
            type="radio"
            name="range"
            checked={selected === "350-400"}
            onClick={(e) => handleCheckboxChange(e, "350-400")}
          />
          <label>350-400</label>
        </li>
      </ul>
    </div>
  );
}

export function FilterPrice({ start, selected, onPriceFilterChange }) {
  const handleCheckboxChange = (event, value) => {
    onPriceFilterChange(value);
  };

  return (
    <div className="filter-div">
      <p className="filter-div_title">الاسعار </p>
      <ul className="filter-div_list">
        <li>
          <input
            type="radio"
            name="priceRang"
            checked={selected === "1000"}
            onClick={(e) => handleCheckboxChange(e, "1000")}
          />
          <label>تحت {start * 1} جنيها </label>
        </li>
        <li>
          <input
            type="radio"
            name="priceRang"
            checked={selected === "1000-3000"}
            onClick={(e) => handleCheckboxChange(e, "1000-3000")}
          />
          <label>
            {start * 1} جنيها - {start * 3} جنيها
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="priceRang"
            checked={selected === "3000-5000"}
            onClick={(e) => handleCheckboxChange(e, "3000-5000")}
          />
          <label>
            {start * 3} جنيها - {start * 5} جنيها
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="priceRang"
            checked={selected === "null-5000"}
            onClick={(e) => handleCheckboxChange(e, "null-5000")}
          />
          <label> {start * 5} جنيها + </label>
        </li>
      </ul>
    </div>
  );
}

export function FilterCarType({ selected, onCarTypeFilterChange }) {
  const handleCarTypeChange = (event, value) => {
    onCarTypeFilterChange(value);
  };

  return (
    <div className="filter-div">
      <p className="filter-div_title">نوع السيارة </p>
      <ul className="filter-div_list">
        <li>
          <input
            type="radio"
            name="carType"
            checked={selected === "كابورلية"}
            onClick={(e) => handleCarTypeChange(e, "كابورلية")}
          />
          <label> كابورلية </label>
        </li>
        <li>
          <input
            type="radio"
            name="carType"
            checked={selected === "هاتش باك"}
            onClick={(e) => handleCarTypeChange(e, "هاتش باك")}
          />
          <label> هاتش باك</label>
        </li>
        <li>
          <input
            type="radio"
            name="carType"
            checked={selected === "سيدان"}
            onClick={(e) => handleCarTypeChange(e, "سيدان")}
          />
          <label> سيدان</label>
        </li>
      </ul>
    </div>
  );
}

export function FilterCity({ selected, onCityFilterChange }) {
  const handleCityChange = (event, value) => {
    onCityFilterChange(value);
  };

  return (
    <div className="filter-div">
      <p className="filter-div_title">المحافظة</p>
      <ul className="filter-div_list">
        <li>
          <input
            type="radio"
            name="city"
            checked={selected === "القاهرة"}
            onClick={(e) => handleCityChange(e, "القاهرة")}
          />
          <label>القاهرة</label>
        </li>
        <li>
          <input
            type="radio"
            name="city"
            checked={selected === "أسيوط"}
            onClick={(e) => handleCityChange(e, "أسيوط")}
          />
          <label>أسيوط</label>
        </li>
        <li>
          <input
            type="radio"
            name="city"
            checked={selected === "بني سويف"}
            onClick={(e) => handleCityChange(e, "بني سويف")}
          />
          <label>بني سويف</label>
        </li>
        <li>
          <input
            type="radio"
            name="city"
            checked={selected === "الإسكندرية"}
            onClick={(e) => handleCityChange(e, "الإسكندرية")}
          />
          <label>الإسكندرية</label>
        </li>
        <li>
          <input
            type="radio"
            name="city"
            checked={selected === "الجيزة"}
            onClick={(e) => handleCityChange(e, "الجيزة")}
          />
          <label>الجيزة</label>
        </li>
      </ul>
    </div>
  );
}
