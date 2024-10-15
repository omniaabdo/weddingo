import React, { useEffect, useState } from "react";
import "../assets/css/services.css";
import photo1 from "../assets/img/services/1.png";
import photo2 from "../assets/img/services/2.jpeg";
import photo3 from "../assets/img/services/3.jpeg";
import photo4 from "../assets/img/services/4.jpeg";
import photo6 from "../assets/img/services/6.jpeg";
import photo8 from "../assets/img/services/8.jpeg";
import photo14 from "../assets/img/services/14.jpeg";
import photo15 from "../assets/img/services/15.jpeg";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import FilterType, { FilterCapacity } from "./FilterType";
import ServiceCardLoading from "./loading-components/ServiceCardLoading";
import { FilterLoading } from "./loading-components/FilterLoading";
import TextLoading, {
  PharagraphLoading,
} from "./loading-components/TextLoading";

export default function Services() {
  const [loading, setLoading] = useState(true);
  const venues = [
    {
      images: [photo1, photo14],
      title: "كوايت كانون",
      rating: 3.8,
      location: "مونتيبيلو، كاليفورنيا",
      priceRange: "7,000 - 8,450 دولار",
      features: ["حفل زفاف/استقبال", "داخلي", "غرف جاهزية", "تنظيف"],
      peopleCapacity: null,
    },
    {
      images: [photo2, photo1],
      title: "قاعة متروبول",
      rating: 4.9,
      location: "غلينديل، كاليفورنيا",
      priceRange: "",
      features: [
        "حفل زفاف/استقبال",
        "داخلي",
        "غرف جاهزية",
        "تنظيف",
        "إقامة",
      ],
      peopleCapacity: 300,
    },
    {
      images: [photo3, photo4],
      title: "قاعة لوس أنجلوس - ذا لاند مارك",
      rating: 5.0,
      location: "ميشن هيلز، كاليفورنيا",
      priceRange: "",
      features: [
        "حفل زفاف/استقبال",
        "داخلي",
        "خارجي",
        "غرف جاهزية",
        "تنظيف",
      ],
      peopleCapacity: null,
    },
    {
      images: [photo15, photo14],
      title: "كوايت كانون",
      rating: 3.8,
      location: "مونتيبيلو، كاليفورنيا",
      priceRange: "7,000 - 8,450 دولار",
      features: ["حفل زفاف/استقبال", "داخلي", "غرف جاهزية", "تنظيف"],
      peopleCapacity: null,
    },
    {
      images: [photo6, photo14],
      title: "قاعة متروبول",
      rating: 4.9,
      location: "غلينديل، كاليفورنيا",
      priceRange: "",
      features: [
        "حفل زفاف/استقبال",
        "داخلي",
        "غرف جاهزية",
        "تنظيف",
        "إقامة",
      ],
      peopleCapacity: 300,
    },
  ];
  

  const endLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    endLoading();
  }, []);

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
                      {venues.map((venue, index) => (
                        <ServiceCard key={index} {...venue} />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="services-card">
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
        </div> */}
    </div>
  );
}
