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
