export default function NewsListSection() {
  return (
    <>
      <section className="min-section subscription">
        <div className="container">
          <div className="subscription_content">
            <div className="row ">
              <div className="col-lg-6 col-sm-12 m-auto">
                <h1 className="frist">اشترك </h1>
                <h1>الان </h1>
                <h1>الي</h1>
                <h1>عملائنا </h1>
                <h1 className="last">المميزون </h1>
                <div className="subscription_content-form">
                  <div class="input-group mt-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="ادخل بريدك الالكتروني"
                    />
                    <button class="btn" type="button">
                      اشترك الان
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
