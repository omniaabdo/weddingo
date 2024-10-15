import CSwiper from "../CSwiper";

export default function HomeSingleService({
  dir,
  sup_title,
  title,
  des,
  go_to,
  data,
}) {
  return (
    <>
      <section className="min-section home-single-service" dir={dir}>
        <div className="home-single-service_bg">
          <div></div>
          <div
            style={{
              clipPath:
                dir === "rtl"
                  ? "polygon(0% 0%, 70% 0%, 100% 100%, 0% 100%)"
                  : "polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%)",
            }}
          ></div>
        </div>
        <div className="container ">
          <div className="row single-service_content">
            <div className="col-lg-6 col-md-12 col-sm-12  single-service_content-text-content">
              <h6>{sup_title ? sup_title : "Subtitle"}</h6>
              <h3>
                <b>{title ? title : "title"}</b>
              </h3>
              <p>{des ? des : "description"}</p>
              <button className="btn"> أستكشف المزيد</button>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 single-service_content-swipper-content">
              <CSwiper dir={dir} data={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
