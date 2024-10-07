import hart_img from "../assets/img/about/aboutus_heart_arrows.png";
import section_3 from "../assets/img/about/section3.jpg";
export default function AboutSection() {
  return (
    <>
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-12 about-us_section1 ">
              <h1>Who we are</h1>
              <p>
                WeddingWire, part of The Knot Worldwide Inc., is a trusted
                wedding vendor directory that helps engaged couples search,
                compare and find the perfect local wedding professionals for
                their big day. Its comprehensive suite of planning tools and
                services, inspiration and community make it easy for couples to
                plan their wedding and help them enjoy every part of the
                journey.
              </p>
            </div>
          </div>
          <hr />
          <div className="row about-us_section2">
            <div className="col-lg-5 col-sm-12">
              <h3>Engaged Couples</h3>
              <p>
                Our comprehensive directory of wedding professionals, from
                venues to photographers, features millions of consumer reviews,
                detailed pricing and availability information, payments and
                more.
              </p>
            </div>
            <div className="col-lg-2 col-sm-12 d-flex align-items-center justify-content-center">
              <img src={hart_img} alt="" />
            </div>
            <div className="col-lg-5 col-sm-12">
              <h3>Vendors</h3>
              <p>
                Get exposure to millions of couples through a premium
                WeddingWire listing. Our features and benefits will drive leads
                and bookings to businesses, highlight consumer reviews and more.
              </p>
            </div>
          </div>
          <hr />
          <div className="row about-us_section3">
            <div className="col-lg-6 col-sm-12 about-us_section3-text">
              <h3>Wedding planning starts here</h3>
              <p>
                We help couples discover vendors and ideas and provide them with
                online tools to help them create their ideal wedding day.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 about-us_section3-img">
              <img src={section_3} alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 about-us_section3-img">
              <img src={section_3} alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 about-us_section3-text">
              <h3>Wedding planning starts here</h3>
              <p>
                We help couples discover vendors and ideas and provide them with
                online tools to help them create their ideal wedding day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
