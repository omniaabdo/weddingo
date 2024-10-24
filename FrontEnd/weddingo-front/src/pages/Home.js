import HeroSection from "../Components/home-component/HeroSection";
import HomeSingleService from "../Components/home-component/HomeSingleService";
import Services from "../Components/home-component/Services";

/*Dresses Images */
import dress_1 from "../assets/img/single-services/dresses/1.jpg";
import dress_2 from "../assets/img/single-services/dresses/2.jpg";
import dress_3 from "../assets/img/single-services/dresses/3.jpg";
import dress_4 from "../assets/img/single-services/dresses/4.jpg";
/*Care Rent img */
import car_1 from "../assets/img/single-services/cars/1.jpg";
import car_2 from "../assets/img/single-services/cars/2.jpg";
import car_3 from "../assets/img/single-services/cars/3.jpg";
import car_4 from "../assets/img/single-services/cars/4.jpg";
/*locations Rent img */
import location_1 from "../assets/img/single-services/locations/1.jpg";
import location_2 from "../assets/img/single-services/locations/2.jpg";
import location_3 from "../assets/img/single-services/locations/3.jpg";
import location_4 from "../assets/img/single-services/locations/4.jpg";
import NewsListSection from "../Components/NewsListSection";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../services/store/home/getHomeData";
import HomeServiceLoading from "../Components/loading-components/HomeServiceLoading";

export default function Home() {
  const { loading, homeData } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  const [dataHome, setDataHome] = useState(null); // تغيير اسم المتغير ليكون متناسقًا مع القواعد العامة لتسمية المتغيرات
  const singleServiceData = [];
  useEffect(() => {
    // استدعاء البيانات عند تحميل الصفحة مرة واحدة
    dispatch(getHomeData());

    // العودة إلى أعلى الصفحة
    window.scrollTo(0, 0);
  }, [dispatch]); // أضف dispatch كتبعيات لضمان استدعاء الـ dispatch بشكل صحيح

  useEffect(() => {
    if (homeData) {
      setDataHome(homeData.data);
      console.log(homeData);
    }
  }, [homeData]);
  return (
    <>
      <HeroSection />
      <Services />

      {loading ? (
        <>
          <HomeServiceLoading />
        </>
      ) : (
        <>
          {dataHome && (
            <>
              {[
                {
                  sup_title: "ابحثي عن فستان الزفاف الذي يعكس شخصيتك الفريدة",
                  title: "كتالوج الفساتين",
                  des: "اكتشفي أحدث صيحات فساتين الزفاف من أشهر المصممين وفستان الوصيفات. اختاري المفضل لديك من كتالوجنا!",
                  go_to: "/services/car-rent",
                  data: dataHome.cars,
                  dir: "ltr",
                },
                {
                  sup_title: "ابحث عن المصور المثالي لرحلتك",
                  title: "كتالوج المصورين",
                  des: "استكشف مجموعتنا الواسعة من المصورين المحترفين، ذوي الخبرة الواسعةواختر الشخص المناسب لرحلتك!",
                  go_to: "/services/photographer",
                  data: dataHome.photographers,
                  dir: "rtl",
                },
                {
                  sup_title: "ابحث عن المكان المثالي لحفل زفافك",
                  title: "كتالوج قاعات الزفاف",
                  des: "استكشف أماكن زفاف خلابة تلبي كل رغباتك. اختر الموقع المثالي للاحتفال بيومك الخاص!",
                  go_to: "/services/venue",
                  data: dataHome.venues,
                  dir: "ltr",
                },
              ].map((item, index) => (
                <HomeSingleService
                  key={index}
                  dir={item.dir}
                  sup_title={item.sup_title}
                  title={item.title}
                  des={item.des}
                  go_to={item.go_to}
                  data={item.data}
                />
              ))}
            </>
          )}
        </>
      )}
      <NewsListSection />
    </>
  );
}
