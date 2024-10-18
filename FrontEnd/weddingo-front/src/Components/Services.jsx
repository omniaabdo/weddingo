import React, { useEffect, useState } from "react";
import "../assets/css/services.css";
import ServiceCard from "./ServiceCard";
import FilterType, {
  FilterCapacity,
  FilterCarType,
  FilterPrice,
} from "./FilterType";
import ServiceCardLoading from "./loading-components/ServiceCardLoading";
import { FilterLoading } from "./loading-components/FilterLoading";
import TextLoading, {
  PharagraphLoading,
} from "./loading-components/TextLoading";
import { BeautyCenterService } from "../services/beauty-center-service.tsx";
import { LocationService } from "../services/location-service.tsx";
import { PhotographerService } from "../services/photographer.tsx";
import { CarRentService } from "../services/car-rent.tsx";
import { StoreService } from "../services/store-service.tsx";
import { VenueService } from "../services/venue-service.tsx";

export default function Services() {
  const [loading, setLoading] = useState(true);
  const [venues, setVenues] = useState([]);
  // const venues = [
  //   {
  //     images: [photo1, photo14],
  //     title: "كوايت كانون",
  //     rating: 3.8,
  //     location: "مونتيبيلو، كاليفورنيا",
  //     priceRange: "7,000 - 8,450 دولار",
  //     features: ["حفل زفاف/استقبال", "داخلي", "غرف جاهزية", "تنظيف"],
  //     peopleCapacity: null,
  //   },
  //   {
  //     images: [photo2, photo1],
  //     title: "قاعة متروبول",
  //     rating: 4.9,
  //     location: "غلينديل، كاليفورنيا",
  //     priceRange: "",
  //     features: ["حفل زفاف/استقبال", "داخلي", "غرف جاهزية", "تنظيف", "إقامة"],
  //     peopleCapacity: 300,
  //   },
  //   {
  //     images: [photo3, photo4],
  //     title: "قاعة لوس أنجلوس - ذا لاند مارك",
  //     rating: 5.0,
  //     location: "ميشن هيلز، كاليفورنيا",
  //     priceRange: "",
  //     features: ["حفل زفاف/استقبال", "داخلي", "خارجي", "غرف جاهزية", "تنظيف"],
  //     peopleCapacity: null,
  //   },
  //   {
  //     images: [photo15, photo14],
  //     title: "كوايت كانون",
  //     rating: 3.8,
  //     location: "مونتيبيلو، كاليفورنيا",
  //     priceRange: "7,000 - 8,450 دولار",
  //     features: ["حفل زفاف/استقبال", "داخلي", "غرف جاهزية", "تنظيف"],
  //     peopleCapacity: null,
  //   },
  //   {
  //     images: [photo6, photo14],
  //     title: "قاعة متروبول",
  //     rating: 4.9,
  //     location: "غلينديل، كاليفورنيا",
  //     priceRange: "",
  //     features: ["حفل زفاف/استقبال", "داخلي", "غرف جاهزية", "تنظيف", "إقامة"],
  //     peopleCapacity: 300,
  //   },
  // ];

  const endLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    getData();
    endLoading();
  }, []);

  const getData = async () => {
    if(window.location.href.includes('beauty-center')) getBeautyCenter();
    if(window.location.href.includes('location')) getLocation();
    if(window.location.href.includes('photographer')) getPhotographer();
    if(window.location.href.includes('car-rent')) getCarRent();
    if(window.location.href.includes('home-store')) getStore();
    if(window.location.href.includes('venue')) getVenue();
  }


  const getBeautyCenter = async () => {
    try {
      const response = await BeautyCenterService.getBeautyCenter();
      if (response && response.data) {
        setVenues(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getLocation = async () => {
    try {
      const response = await LocationService.getLocation();
      if (response && response.data) {
        setVenues(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getPhotographer = async () => {
    try {
      const response = await PhotographerService.getPhotographer();
      if (response && response.data) {
        setVenues(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getCarRent = async () => {
    try {
      const response = await CarRentService.getCarRent();
      if (response && response.data) {
        setVenues(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getVenue = async () => {
    try {
      const response = await VenueService.getVenue();
      if (response && response.venues) {
        setVenues(response.venues);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getStore = async () => {
    try {
      const response = await StoreService.getStore();
      if (response && response.data) {
        setVenues(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="services pt-5">
      <div className="container">
        {loading ? (
          <>
            <h2 className="text-center">
              <TextLoading />
            </h2>
            <p className="subtitle ">
              <PharagraphLoading />
            </p>
          </>
        ) : (
          <>
            <h2 className="text-center">أماكن إقامة حفلات الزفاف</h2>
            <p className="subtitle">
              سواء كنت تبحث عن قاعة فخمة في فندق خمس نجوم، أو منتجع يطل على
              البحر، أو مكان ريفي مريح بين أحضان الطبيعة، لدينا مجموعة واسعة من
              أماكن الزفاف لتناسب كل الأذواق. يمكنك العثور على قاعات تناسب
              الحفلات الصغيرة الحميمية أو حفلات الزفاف الكبيرة، مع خيارات تتضمن
              قاعات حديثة، أماكن مفتوحة، وحدائق رومانسية. استعرض قاعات الأفراح
              في مواقع متميزة من المدينة أو في أماكن هادئة منعزلة. أسعار الأماكن
              تتفاوت من الميزانيات المتوسطة إلى الفاخرة، مع وجود خدمات إضافية
              مثل الطعام، والديكور، والإضاءة، لتجعل يومك مميزًا بكل التفاصيل.
            </p>
          </>
        )}

        <div className="row mt-5">
          <div className="col-12">
            <div className="row">
              <div className="services_filter col-lg-3 col-md-12 col-sm-12">
                {loading ? (
                  <>
                    <FilterLoading />
                    <FilterLoading />
                  </>
                ) : (
                  <>
                    <p>الفلاتر</p>
                    <FilterType />
                    <FilterCapacity />
                    <FilterPrice start={1000} />
                    <FilterCarType />
                  </>
                )}
              </div>
              <div className="services_content col-lg-9 col-md-12 col-sm-12">
                <div className=" row d-flex flex-wrap">
                  {loading ? (
                    <>
                      <ServiceCardLoading />
                      <ServiceCardLoading />
                      <ServiceCardLoading />
                      <ServiceCardLoading />
                      <ServiceCardLoading />
                      <ServiceCardLoading />
                    </>
                  ) : (
                    <>
                      <h6>
                        وجدنا
                        <b> {" "+venues.length+" "} </b>
                        نتيجة مطابقة لك
                      </h6>
                      {venues.length > 0 ? (venues.map((venue, index) => (
                        <ServiceCard key={index} {...venue} />
                      ))): ''}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
