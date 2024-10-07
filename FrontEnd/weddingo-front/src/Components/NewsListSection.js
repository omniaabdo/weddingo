export default function NewsListSection() {
  return (
    <>
      <section className="min-section subscription">
        <div className="container">
          <div className="subscription_content">
            <div className="row ">
              <div className="col-lg-6 col-sm-12 m-auto">
                <h1 className="frist">subscripe </h1>
                <h1>to </h1>
                <h1>our </h1>
                <h1>user </h1>
                <h1 className="last">list </h1>
                <div className="subscription_content-form">
                  <div class="input-group mt-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Recipient's username"
                    />
                    <button class="btn" type="button">
                      SUBSCRIPE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
