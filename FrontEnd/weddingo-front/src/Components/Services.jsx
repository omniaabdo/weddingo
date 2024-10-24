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
  const [allvenues, setAllVenues] = useState([]);
  const [content, setContent] = useState({});
  const [pageName, setPageName] = useState('');

   const contentDescription = [
    {
      title: "أماكن إقامة حفلات الزفاف", 
      content: "سواء كنت تبحث عن قاعة فخمة في فندق خمس نجوم أو منتجع يطل على البحر أو مكان ريفي مريح بين أحضان الطبيعة، لدينا مجموعة واسعة من أماكن الزفاف لتناسب كل الأذواق، يمكنك العثور على قاعات تناسب الحفلات الصغيرة الحميمية أو حفلات الزفاف الكبيرة، مع خيارات تتضمن قاعات حديثة، أماكن مفتوحة، وحدائق رومانسية، استعرض قاعات الأفراح في مواقع متميزة من المدينة أو في أماكن هادئة منعزلة، أسعار الأماكن تتفاوت من الميزانيات المتوسطة إلى الفاخرة، مع وجود خدمات إضافية مثل الطعام والديكور والإضاءة لتجعل يومك مميزًا بكل التفاصيل.",
    },
    {
      title: "المصورون لاتقاط اللحظات وتحويلها إلى ذكريات خالدة",
      content: "سواء كنت تبحث عن مصور لحفلات الزفاف(لاتقاط اللحظات وتحويلها إلى ذكريات خالدة)،، نقدم لك مجموعة متنوعة من المصورين المحترفين الذين يتميزون بالإبداع والاحترافية. يمكنك استعراض ملفاتهم الشخصية، ومعرفة أسلوبهم في التصوير، بالإضافة إلى الاطلاع على باقات وأسعار تناسب مختلف الميزانيات. سواء كنت تفضل التصوير الفوتوغرافي الكلاسيكي أو الأساليب الحديثة المبتكرة، ستجد هنا المصور المثالي لتوثيق لحظاتك الخاصة بجودة عالية وسعر مناسب."
    },
    {
      title: "مراكز التجميل للحصول على أفضل العناية الشخصية ",
      content: "مراكز التجميل هي وجهتك المثالية للحصول على أفضل العناية الشخصية والخدمات التجميلية التي تجعلك تشعرين بالتألق والثقة. سواء كنت تبحثين عن خدمات العناية بالبشرة، تصفيف الشعر، المكياج الاحترافي، أو العناية بالأظافر، نقدم لك مجموعة من أفضل مراكز التجميل التي تتميز بالجودة والاحترافية. يمكنك استعراض مختلف المراكز، الاطلاع على خدماتهم المتنوعة، والمقارنة بين أسعار الباقات التي تناسب جميع الميزانيات. سواء كنت ترغبين في جلسة استرخاء أو تحضيرات لمناسبة خاصة، ستجدين هنا المركز المثالي لتلبية احتياجاتك والحصول على تجربة جمال فريدة."
    },
    {
      title: "مواقع التصوير توفر لك البيئة المثالية لالتقاط أجمل اللحظات",
      content: "مواقع التصوير توفر لك البيئة المثالية لالتقاط أجمل اللحظات وصنع ذكريات خالدة. سواء كنت تبحث عن مكان لتصوير جلسة زفاف، جلسة عائلية، أو مشروع فني، نقدم لك مجموعة متنوعة من مواقع التصوير التي تتميز بالطبيعة الخلابة، المناظر الفريدة، والتصاميم المعمارية الرائعة. يمكنك استعراض المواقع المختلفة، من الحدائق المفتوحة والشواطئ الساحرة إلى القاعات الداخلية الفاخرة والأماكن الريفية الهادئة. مع خيارات تتناسب مع جميع الأذواق والميزانيات، ستجد الموقع المثالي لجلسة التصوير الخاصة بك، مع إمكانية الاطلاع على الأسعار والخدمات الإضافية المتاحة لكل موقع."
    },
    {
      title: "سيارات الأفراح الفاخرة تضيف لمسة من الأناقة والفخامة إلى يوم زفافك",
      content: "سيارات الأفراح الفاخرة تضيف لمسة من الأناقة والفخامة إلى يوم زفافك، حيث تلعب دورًا أساسيًا في جعل دخولك إلى الحفل لحظة مميزة لا تُنسى. سواء كنت تبحث عن سيارة كلاسيكية، ليموزين فاخرة، أو سيارة رياضية حديثة، نقدم لك مجموعة متنوعة من السيارات المخصصة للإيجار لتلبية جميع الأذواق والاحتياجات. يمكنك استعراض السيارات المتاحة، الاطلاع على تفاصيلها، واختيار الأنسب لمناسبتك الخاصة، مع إمكانية مقارنة الأسعار والباقات المختلفة لتجد السيارة المثالية التي تضيف إلى يومك لمسة من التميز والفخامة بأسعار تناسب جميع الميزانيات."
    },
    {
      title: "الأجهزة الكهربائية",
      content: "سواء كنتِ تبحثين عن أدوات المطبخ مثل الثلاجات والأفران أو أجهزة الغسيل مثل الغسالات والمجففات، نقدم لكِ تشكيلة واسعة من الأجهزة الكهربائية التي تناسب احتياجات العرائس. يمكنك استعراض أحدث الموديلات، التعرف على الميزات التقنية المتطورة، ومقارنة الأسعار لتجدي ما يتناسب مع ميزانيتك وذوقك. مع خيارات متعددة تتراوح بين الأجهزة الأساسية والفاخرة، نساعدك في تجهيز منزلك بأفضل الأجهزة التي تجمع بين الجودة والأداء العالي بأسعار مناسبة."
    }
  ];

  useEffect(() => {
    getData();
  }, [location.pathname]);

  const getData = async () => {
    if(window.location.href.includes('beauty-center')) {
      getBeautyCenter();
      setPageName('beauty-center')
      setContent({title: contentDescription[2].title, content: contentDescription[2].content})
    }
    if(window.location.href.includes('location')) {
      getLocation();
      setPageName('location')
      setContent({title: contentDescription[3].title, content: contentDescription[3].content})
    }
    if(window.location.href.includes('photographer')) {
      getPhotographer();
      setPageName('photographer')
      setContent({title: contentDescription[1].title, content: contentDescription[1].content})
    }
    if(window.location.href.includes('car-rent')) {
      getCarRent();
      setPageName('car-rent')
      setContent({title: contentDescription[4].title, content: contentDescription[4].content})
    }
    if(window.location.href.includes('home-store')) {
      getStore();
      setPageName('home-store')
      setContent({title: contentDescription[5].title, content: contentDescription[5].content})
    }
    if(window.location.href.includes('venue')) {
      getVenue(); 
      setPageName('venue')
      setContent({title: contentDescription[0].title, content: contentDescription[0].content})
    }
  }

  const filterDataByCapacity = (selected) => {
    let min = selected.split('-')[0];
    let max = selected.split('-')[1];
    setVenues(allvenues.filter(c => c.capacity >= min && c.capacity <= max));
  }

  const filterDataByPrice = (selected) => {
    let min = selected.split('-')[0];
    let max = selected.split('-')[1];
    setVenues(allvenues.filter(c => {
      if(min && max) return c.price >= min && c.price <= max;
      else if(min) return c.price <= min;
      else if(max) return c.price >= max;
    }));
  }

  const filterDataByCar = (type) => {
    setVenues(allvenues.filter(c => c.carType == type));
  }

  const filterDataByStatus = (status) => {
    setVenues(allvenues.filter(c => c.status == status));
  }

  const resetFilter = () => {
    setVenues(allvenues);
  }

  const getBeautyCenter = async () => {
    try {
      setLoading(true);
      const response = await BeautyCenterService.getBeautyCenter();
      if (response && response.data) {
        setLoading(false);
        setVenues(response.data);
        setAllVenues(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getLocation = async () => {
    try {
      setLoading(true);
      const response = await LocationService.getLocation();
      if (response && response.data) {
        setLoading(false);
        setVenues(response.data);
        setAllVenues(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getPhotographer = async () => {
    try {
      setLoading(true);
      const response = await PhotographerService.getPhotographer();
      if (response && response.data) {
        setLoading(false);
        setVenues(response.data);
        setAllVenues(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getCarRent = async () => {
    try {
      setLoading(true);
      const response = await CarRentService.getCarRent();
      if (response && response.data) {
        setLoading(false);
        setVenues(response.data);
        setAllVenues(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getVenue = async () => {
    try {
      setLoading(true);
      const response = await VenueService.getVenue();
      if (response && response.venues) {
        setLoading(false);
        setVenues(response.venues);
        setAllVenues(response.venues);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getStore = async () => {
    try {
      setLoading(true);
      const response = await StoreService.getStore();
      if (response && response.data) {
        setLoading(false);
        setVenues(response.data);
        setAllVenues(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="services">
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
            <h2 className="text-center">{content.title}</h2>
            <p className="subtitle">
             {content.content}
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
                    { pageName === 'beauty-center' ? (
                      <FilterType onStatusFilterChange={(selected) => filterDataByStatus(selected)}/>
                    ) : ''}
                    { pageName === 'venue' ? (
                    <FilterCapacity onFilterChange={(selected) => filterDataByCapacity(selected)}/>
                    ) : ''}
                    { pageName === 'venue' || pageName === 'beauty-center' || pageName === 'location' || pageName === 'home-store' ? (
                    <FilterPrice start={1000} onPriceFilterChange={(selected) => filterDataByPrice(selected)}/>
                  ) : ''}
                  { pageName === 'car-rent' ? (
                    <FilterCarType onCarTypeFilterChange={(selected) => filterDataByCar(selected)}/>
                    ) : ''}
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
                      <div style={{display: 'flex'}}>
                        <h6>
                          وجدنا
                          <b> {" "+venues.length+" "} </b>
                          نتيجة مطابقة لك
                        </h6>
                        <p style={{color: '#1f88d9', marginRight: '5px', cursor: 'pointer', fontSize: 'medium'}} onClick={(e) => resetFilter()}>إلغاء الفلتر</p>
                      </div>
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
