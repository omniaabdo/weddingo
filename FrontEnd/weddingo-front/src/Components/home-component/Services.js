import venus from "../../assets/img/services/venue.jpg";
import photography from "../../assets/img/services/photography.jpg";
import catering from "../../assets/img/services/catering.jpg";

import banquet_hall from "../../assets/img/smail-logos/banquet_hall.svg";
import camera from "../../assets/img/smail-logos/camera_2.svg";
import dress from "../../assets/img/smail-logos/dress.svg";
import apple from "../../assets/img/smail-logos/apple.svg";

const servicesData = [
  {
    img: venus, // صورة تمثل قاعة الزفاف
    icon: banquet_hall, // أيقونة لتمثيل القاعة
    title: "قاعات الزفاف",
    des: "استعرض أفضل قاعات الاحتفالات وقم بحجز مكان مميز للاحتفال بحبك.",
  },
  {
    img: venus,
    icon: camera,
    title: "مصورين الزفاف",
    des: "تصفح أعمال المصورين المحليين وابحث عن المصور الذي سيُخلّد لحظات يومك المميز.", },
  {
    img: venus,
    icon: apple,
    title: "تأجير سيارات الزفاف",
    des: "استأجر سيارات فاخرة ومميزة لترافقك في يومك الخاص وتضيف لمسة من الفخامة.",
 },
  {
    img: venus,
    icon: dress,
    title: "فساتين الزفاف",
    des: "تسوق لأجمل إطلالة زفاف من خلال استكشاف المتاجر والبوتيكات القريبة منك.",
},
  {
    img: venus,
    icon: dress,
    title: "بيوتي سنتر",
    des: "احصلي على أروع إطلالة في يوم زفافك من خلال أفضل مراكز التجميل المتخصصة.",
},
  {
    img: venus,
    icon: dress,
    title: "سوق الأجهزة",
    des: "تسوق لأفضل العروض على الأجهزة المنزلية والإلكترونية لاستكمال تجهيزات منزلك.",
},
];

const ServiceCard = ({ main_img, icon, title, des }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="home_services-cards-single card">
          <img src={main_img} alt="this is img" className="single_card-img" />
          <div className="card_contant-container">
            <div className="card_contant-container-icon-container">
              <img src={icon} alt="" className="card_contant-container-icon" />
            </div>
            <h6 className="card_contant-container-card-header">{title}</h6>
            <p>{des}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default function Services() {
  return (
    <>
      <section className="home_services min-section">
        <div className="container">
          <h4 className="home_services-title">تعرف علي خدماتنا المقدمة</h4>
          <p className="home_services-pharagraph">
            شاهد الخدمات المقدمة لدينا واستمتع .. نحن في خدمتك
          </p>
          <div className="home_services-cards row">
            {servicesData.map((item) => (
              <ServiceCard
                main_img={item.img}
                icon={item.icon}
                title={item.title}
                des={item.des}
              />
            ))}
           
          </div>
        </div>
      </section>
    </>
  );
}
