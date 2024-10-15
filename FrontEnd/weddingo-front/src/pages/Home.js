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
import { useEffect } from "react";

const singleServiceData = [
  {
    sup_title: "ابحثي عن فستان الزفاف الذي يعكس شخصيتك الفريدة",
    title: "كتالوج الفساتين",
    des: "اكتشفي أحدث صيحات فساتين الزفاف من أشهر المصممين وفستان الوصيفات. اختاري المفضل لديك من كتالوجنا!",
    go_to: "/about",
    data: [
      {
        name: "كارولينا ميكاتورا",
        img: dress_1,
      },
      {
        name: "ستايل كلاسيك",
        img: dress_2,
      },
      {
        name: "مودرن كلوز",
        img: dress_3,
      },
      {
        name: "جوان مالكوم",
        img: dress_4,
      },
    ],
    dir: "ltr",
  },
  {
    sup_title: "ابحث عن السيارة المثالية لرحلتك",
    title: "كتالوج تأجير السيارات",
    des: "استكشف مجموعتنا الواسعة من السيارات للإيجار، من السيارات الاقتصادية إلى الطرازات الفاخرة. اختر السيارة المثالية لرحلتك!",
    go_to: "/rentals",
    data: [
      {
        name: "فورد موستانج",
        img: car_1,
      },
      {
        name: "شيفروليه كامارو",
        img: car_2,
      },
      {
        name: "تسلا موديل 3",
        img: car_3,
      },
      {
        name: "بي إم دبليو X5",
        img: car_4,
      },
    ],
    dir: "rtl",
  },
  {
    sup_title: "ابحث عن المكان المثالي لحفل زفافك",
    title: "كتالوج قاعات الزفاف",
    des: "استكشف أماكن زفاف خلابة تلبي كل رغباتك. اختر الموقع المثالي للاحتفال بيومك الخاص!",
    go_to: "/venues",
    data: [
      {
        name: "منتجع شاطئ الغروب",
        img: location_1,
      },
      {
        name: "إطلالة الجبل",
        img: location_2,
      },
      {
        name: "قصر الحديقة الملكية",
        img: location_3,
      },
      {
        name: "فيلا البحيرة",
        img: location_4,
      },
    ],
    dir: "ltr",
  },
];


export default function Home() {
  useEffect(() => {}, [window.scrollTo(0, 0)]);
  return (
    <>
      <HeroSection />
      <Services />
      {singleServiceData.map((item, index) => (
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
      <NewsListSection />
    </>
  );
}
