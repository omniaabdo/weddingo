export default function HomeServiceLoading() {
  return (
    <>
      <section className="min-section home-single-service" dir="ltr">
        <div className="container ">
          <div className="row single-service_content">
            <div className="col-lg-6 col-md-12 col-sm-12  single-service_content-text-content">
              <h6 class="placeholder-glow">
                <span class="placeholder col-6"></span>
              </h6>
              <h3>
                <span class="placeholder col-6"></span>
              </h3>
              <p class="placeholder-glow">
                <span class="placeholder col-10"></span>
                <span class="placeholder col-8"></span>
                <span class="placeholder col-8"></span>
                <span class="placeholder col-6"></span>
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 single-service_content-swipper-content">
              <div
                className="placeholder-glow card "
                style={{ width: "30%", height: "300px" }}
              >
                <span class="placeholder" style={{ height: "100%" }}></span>
              </div>
              <div
                className="placeholder-glow card "
                style={{ width: "30%", height: "300px" }}
              >
                <span class="placeholder" style={{ height: "100%" }}></span>
              </div>
              <div
                className="placeholder-glow card "
                style={{ width: "30%", height: "300px" }}
              >
                <span class="placeholder" style={{ height: "100%" }}></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
