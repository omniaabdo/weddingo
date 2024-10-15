import hart_img from "../assets/img/about/aboutus_heart_arrows.png";
import section_3 from "../assets/img/about/section3.jpg";
export default function AboutSection() {
  return (
    <>
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-12 about-us_section1 ">
              <h1>من نحن</h1>
              <p>
                هو دليل موثوق لمقدمي خدمات حفلات الزفاف يساعد الأزواج المخطوبين
                في البحث والمقارنة والعثور على أفضل المتخصصين المحليين لحفل
                زفافهم الكبير. من خلال مجموعة شاملة من أدوات وخدمات التخطيط،
                والإلهام، والمجتمع، يجعل WeddingWire من السهل على الأزواج
                التخطيط لحفل زفافهم والاستمتاع بكل جزء من الرحلة.
              </p>
            </div>
          </div>
          <hr />
          <div className="row about-us_section2">
            <div className="col-lg-5 col-sm-12">
              <h3>الأزواج المخطوبين</h3>
              <p>
                دليلنا الشامل لمقدمي خدمات الزفاف، من القاعات إلى المصورين،
                يحتوي على ملايين من المراجعات من المستهلكين، بالإضافة إلى تفاصيل
                حول الأسعار ومدى التوفر، وخيارات الدفع، والمزيد.
              </p>
            </div>
            <div className="col-lg-2 col-sm-12 d-flex align-items-center justify-content-center">
              <img src={hart_img} alt="" />
            </div>
            <div className="col-lg-5 col-sm-12">
              <h3>مقدمو الخدمات</h3>
              <p>
                احصل على فرصة الظهور أمام ملايين الأزواج من خلال إدراج مميز على
                WeddingWire. ميزاتنا وفوائدنا ستساعد في جذب العملاء والحجوزات
                إلى أعمالك، وتسليط الضوء على مراجعات العملاء والمزيد.
              </p>
            </div>
          </div>
          <hr />
          <div className="row about-us_section3">
            <div className="col-lg-6 col-sm-12 about-us_section3-text">
              <h3>يبدأ التخطيط لحفل الزفاف هنا</h3>
              <p>
                نحن نساعد الأزواج على اكتشاف مقدمي الخدمات والأفكار، ونوفر لهم
                أدوات عبر الإنترنت لمساعدتهم في إنشاء يوم الزفاف المثالي.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 about-us_section3-img">
              <img src={section_3} alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 about-us_section3-img">
              <img src={section_3} alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 about-us_section3-text">
              <h3>يبدأ التخطيط لحفل الزفاف هنا</h3>
              <p>
                نحن نساعد الأزواج على اكتشاف مقدمي الخدمات والأفكار، ونوفر لهم
                أدوات عبر الإنترنت لمساعدتهم في إنشاء يوم الزفاف المثالي.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
