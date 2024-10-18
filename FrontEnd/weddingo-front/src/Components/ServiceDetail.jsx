import React, { useState, useEffect } from "react";
import photo15 from "../assets/img/services/15.jpeg";
import "../assets/css/service-detail.css";
import Carousel from "react-bootstrap/Carousel";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import location from "../assets/img/smail-logos/location.svg";
import phone from "../assets/img/smail-logos/phone.svg";
import SingleServiceDetailsLoading, {
  CarouselLoading,
  DescriptionContentLoading,
} from "./loading-components/SingleServiceDetailsLoading";
export default function ServiceDetail() {
  const [loading, setLoading] = useState(true);
  const endLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    endLoading();
  }, []);
  return (
    <section className="min-section single-service">
      <div className="container">
        <div className="row py-5 single-service_content">
          <div className="single-service_content-images col-lg-8 col-sm-12 py-5">
            <div className="row">
              {loading ? (
                <>
                  <CarouselLoading />
                  <DescriptionContentLoading />
                  <DescriptionContentLoading />
                  <DescriptionContentLoading />
                </>
              ) : (
                <>
                  <div className="col-12">
                    <Carousel
                      prevIcon={
                        <FaChevronLeft className="custom-carousel-arrow-left" />
                      }
                      nextIcon={
                        <FaChevronRight className="custom-carousel-arrow-right" />
                      }
                    >
                      <Carousel.Item>
                        <img
                          style={{ objectFit: "cover" }}
                          className="d-block"
                          src={photo15}
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          style={{ objectFit: "cover" }}
                          className="d-block"
                          src={photo15}
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          style={{ objectFit: "cover" }}
                          className="d-block"
                          src={photo15}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <div className="col-12 mt-5 content-type pricing">
                    <h4 className="content-type_title">معلومات عن الاسعار</h4>
                    <ul className="pricing_list">
                      <li>
                        <i></i> <span>تتراوح الاسعار من : $7,000 - $8,450</span>
                      </li>
                      <li>
                        <i></i> <span>عادتا يتم الاتفق علي $7,750</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 mt-5 content-type about">
                    <h4 className="content-type_title">عن المكان </h4>
                    <p>
                      قاعة "رويال جاردن" تعد من أجمل القاعات التي تقدم مزيجًا من
                      الأناقة والرفاهية. تتميز القاعة بمساحات داخلية واسعة
                      ومجهزة بأحدث التجهيزات لتلبية احتياجات حفلات الزفاف
                      الكبيرة والصغيرة. حديقة القاعة الخارجية تُعد المكان
                      المثالي لإقامة حفلات الزفاف في الهواء الطلق، مع ممرات
                      مرصوفة وحدائق مزينة بالزهور الملونة. يمكن إضافة لمسات من
                      الزينة مثل الأضواء والزهور لتعزيز جمال المكان. في الداخل،
                      تم تصميم القاعة بديكور عصري وفاخر، حيث تحتوي على أرضية رقص
                      خشبية كبيرة وثريات مذهلة. القاعة قادرة على استيعاب ما يصل
                      إلى 500 ضيف، وتوفر مساحة مخصصة لعروض الترفيه مع منصة مخصصة
                      للـ DJ ونظام صوتي متكامل. بالإضافة إلى ذلك، يوجد بار مجهز
                      لتقديم المشروبات، مما يضمن أن تكون الليلة مليئة بالبهجة
                      والمرح.
                    </p>
                  </div>
                  <div className="col-12 mt-5 content-type content-div FQ">
                    <h4 className="content-type_title">المميزات والخدمات</h4>
                    <ul>
                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        ميزة رقم 1
                      </li>
                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        ميزة رقم 1
                      </li>
                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        ميزة رقم 1
                      </li>
                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        ميزة رقم 1
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="single-service_content-details col-lg-4 col-sm-12">
            {loading ? (
              <>
                <SingleServiceDetailsLoading />
              </>
            ) : (
              <>
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="badge badge-warning">
                        <svg viewBox="0 0 16 17">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.853 1.167h-.002H1.107a.433.433 0 00-.432.396v.005l-.001.01a1.837 1.837 0 00-.006.139c-.001.09 0 .215.013.365.024.296.09.701.26 1.113.172.414.454.845.915 1.171.402.284.916.472 1.562.516v.377a4.55 4.55 0 004.117 4.53v3.728H5.68a.433.433 0 100 .867h4.574a.433.433 0 000-.867H8.401V9.79a4.55 4.55 0 004.117-4.53v-.377c.646-.044 1.16-.232 1.562-.516.46-.326.743-.757.915-1.17.17-.413.236-.818.26-1.114a3.874 3.874 0 00.01-.473l-.003-.03v-.016a.433.433 0 00-.433-.396h-2.742-.002H3.853zm-.435.866H1.547c.02.236.073.537.195.83.124.301.317.585.614.795.246.174.585.313 1.062.355v-1.98zm.866 0h7.368V5.26a3.684 3.684 0 01-7.368 0V2.033zm8.234 0v1.98c.476-.042.816-.18 1.062-.355.297-.21.49-.494.614-.794.122-.294.175-.595.195-.83h-1.87zm-8.185 13.29c0-.24.194-.434.433-.434h6.404a.433.433 0 010 .867H4.766a.433.433 0 01-.433-.433z"
                          ></path>
                        </svg>
                        الاكثر اختيارا داثما
                      </span>
                      <i class="fa fa-heart" aria-hidden="true"></i>
                    </div>

                    <h3 class="card-title mt-2">قاعة "رويال جاردن"</h3>

                    <div class="rating">
                      <span class="text-warning">⭐⭐⭐⭐</span>
                      <span> 3.8 · 25 مراجعة</span>
                    </div>

                    <p className="more">معلومات التواصل</p>
                    <ul className="card-list">
                      <li>
                        <img src={location} />
                        <span>اسيوط الجديدة - اسيوط </span>
                      </li>
                      <li>
                        <img src={phone} />
                        <span>01550005909</span>
                      </li>
                    </ul>

                    <div class="price-range mt-3">
                      <i class="fa fa-money-bill-wave"></i>
                      تتراوح الاسعار من : $7,000 - $8,450
                    </div>

                     <button class="btn btn-primary btn-block mt-3">
                      اضافة للميزانية
                    </button> 
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
