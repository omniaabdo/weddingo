import React, { useState } from "react";
import search_img from "../../assets/img/smail-logos/search.svg";
import { BASE_URL } from "../../utils/config";
export default function HeroSection() {
  const [query, setQuery] = useState(""); // State for search input
  const [searchResults, setSearchResults] = useState([]); // State for storing results
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query) return;

    try {
      setError(null); // Reset any previous errors
      const response = await fetch(
        `${BASE_URL}/api/users/searchServices?query=${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }
      const data = await response.json();
      if (data.status === "success") {
        setSearchResults(data.data);
      } else {
        setError("No results found");
      }
    } catch (error) {
      console.error("Search error:", error);
      setError("Error occurred while searching");
    }
  };

  return (
    <>
      <section className="min-section section_home_hero">
        <div className="container">
          <div className="text_container">
            <h2 className="text_container-heading">
              {" "}
              معنا سوف تجد ما تبحث عنه
            </h2>
            <p>
              من خلال خدماتنا ستجد ما تريد وبالسعار المناسبة لك , واكثر من ذلك
            </p>
            <div className="search_hero input-group mb-3" dir="ltr">
              <span className="input-group-text" id="basic-addon1">
                <img src={search_img} alt="" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="سيارة للايجار, قاعة مفتوحة,...الخ"
                aria-label="Search"
                aria-describedby="basic-addon1"
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Update query state on input change
              />
              <button className="btn" onClick={handleSearch}>
                بحث
              </button>
            </div>

            {/* <div className="search-results">
              {error && <p className="error-message">{error}</p>}
              {searchResults &&
                searchResults.length > 0 &&
                searchResults.map((result) => (
                  <div key={result._id} className="search-result-item">
                    <h3>{result.name}</h3>
                  </div>
                ))}
            </div> */}
            {/* Display search results */}
          </div>
        </div>
      </section>
    </>
  );
}
