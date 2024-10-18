import "../assets/css/filters.css";
export default function FilterType() {
  return (
    <>
      <div className="filter-div">
        <p className="filter-div_title">النوع</p>
        <ul className="filter-div_list">
          <li>
            <input type="checkbox" />
            <label>مفتوحة </label>
          </li>
          <li>
            <input type="checkbox" />
            <label>مغلقة</label>
          </li>
        </ul>
      </div>
    </>
  );
}
export  function FilterCapacity() {
  return (
    <>
      <div className="filter-div">
        <p className="filter-div_title">سعة الاشخاص</p>
        <ul className="filter-div_list">
          <li>
            <input type="checkbox" />
            <label>0-99</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>100-249</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>اكثر من  300</label>
          </li>
        </ul>
      </div>
    </>
  );
}
export  function FilterPrice({start}) {

  return (
    <>
      <div className="filter-div">
        <p className="filter-div_title">الاسعار </p>
        <ul className="filter-div_list">
          <li>
            <input type="checkbox" />
            <label>تحت  {start * 1} جنيها </label>
          </li>
          <li>
            <input type="checkbox" />
            <label>
            {start * 2} جنيها   - {start * 3} جنيها  </label>
          </li>
          <li>
            <input type="checkbox" />
            <label> {start * 4} جنيها   - {start * 5} جنيها  </label>
          </li>
          <li>
            <input type="checkbox" />
            <label> {start * 6} جنيها + </label>
          </li>
        </ul>
      </div>
    </>
  );
}

export  function FilterCarType() {

  return (
    <>
      <div className="filter-div">
        <p className="filter-div_title">نوع السيارة </p>
        <ul className="filter-div_list">
          <li>
            <input type="checkbox" />
            <label> كابورلية </label>
          </li>
          <li>
            <input type="checkbox" />
            <label> هاتش باك</label>
          </li>
          <li>
            <input type="checkbox" />
            <label> سيدان</label>
          </li>
        </ul>
      </div>
    </>
  );
}



