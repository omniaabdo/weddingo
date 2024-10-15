export default function SingleServiceDetailsLoading() {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title mt-2 placeholder-glow">
            <span class="placeholder col-12"></span>
          </h3>

          <div class="rating placeholder-glow">
            <span class="placeholder col-10"></span>
          </div>

          <p className="more"></p>
          <ul className="card-list">
            <li>
              <div class="rating placeholder-glow">
                <span class="placeholder col-6"></span>
              </div>
            </li>
            <li>
              <div class="rating placeholder-glow">
                <span class="placeholder col-8"></span>
              </div>
            </li>
          </ul>

          <div class="rating placeholder-glow">
            <span class="placeholder col-10"></span>
          </div>
          <a
            class="btn btn-primary btn-block mt-3 disabled placeholder col-12"
            aria-disabled="true"
          ></a>
        </div>
      </div>
    </>
  );
}

export function CarouselLoading() {
  return (
    <>
      <p class="card-text placeholder-glow" style={{ height: "500px" }}>
        <span
          class="placeholder col-12"
          style={{ width: "100%", height: "100%" }}
        ></span>
      </p>
    </>
  );
}

export function DescriptionContentLoading() {
  return (
    <>
      <div className="col-12 mt-5 content-type">
        <h5 class="placeholder-glow">
          <span class="placeholder col-6"></span>
        </h5>
        <p class="placeholder-glow">
          <span class="placeholder col-12"></span>
          <span class="placeholder col-12"></span>
          <span class="placeholder col-12"></span>
          <span class="placeholder col-10"></span>
        </p>
      </div>
    </>
  );
}
