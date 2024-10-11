import venus from "../../assets/img/services/venue.jpg";
import photography from "../../assets/img/services/photography.jpg";
import catering from "../../assets/img/services/catering.jpg";

import banquet_hall from "../../assets/img/smail-logos/banquet_hall.svg";
import camera from "../../assets/img/smail-logos/camera_2.svg";
import dress from "../../assets/img/smail-logos/dress.svg";
import apple from "../../assets/img/smail-logos/apple.svg";

const servicesData = [
  {
    img: venus,
    icon: banquet_hall,
    title: "Wedding Venues",
    des: "Explore and tour top-rated reception venues to book a special space to celebrate your love.",
  },
  {
    img: photography,
    icon: camera,
    title: "Wedding Photographers",
    des: "Browse local photographers and their work to find one who’ll capture the essence of your day.",
  },
  {
    img: catering,
    icon: apple,
    title: "Wedding Caterers",
    des: "Find experienced chefs, bartenders, and caterers to craft the ultimate menu to remember.",
  },
  {
    img: venus,
    icon: dress,
    title: "Wedding Attire",
    des: "Shop in style for your unique wedding look by exploring boutiques and stores near you.",
  },
];

const ServiceCard = ({ main_img, icon, title, des }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
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
          <h4 className="home_services-title">Find every vendor you need</h4>
          <p className="home_services-pharagraph">
            Connect with seasoned wedding pros to help bring your day to life.
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
