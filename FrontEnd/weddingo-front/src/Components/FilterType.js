import "../assets/css/filters.css";
export default function FilterType() {
  return (
    <>
      <div className="filter-div">
        <p className="filter-div_title">type</p>
        <ul className="filter-div_list">
          <li>
            <input type="checkbox" />
            <label>Open</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>close</label>
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
        <p className="filter-div_title">Capacity</p>
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
            <label>more 300</label>
          </li>
        </ul>
      </div>
    </>
  );
}
