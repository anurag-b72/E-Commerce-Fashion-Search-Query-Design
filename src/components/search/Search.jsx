import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import "./search.css";

const Search = () => {
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  const searchEncoder = () => {
    const trends = [
        faker.commerce.productName(),
        faker.commerce.productName(),
        faker.commerce.productName(),
        faker.commerce.productName(),
        // faker.image.fashion("320", "240", true),
    ];
    setSuggestions(trends);
    setShowSuggestions(true);
  };

  return (
    <div className="search__container">
      {/* <input type="text" placeholder="Search" className='input' /> */}
      <div class="group">
        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Search"
          type="search"
          class="input"
          onChange={searchEncoder}
          style={{ display: showSuggestions ? "block" : "none" }}
        />
        <button>Search</button>
      </div>
      {/* <button onClick={handleClick}>Search</button> */}
      {/* {suggestions.length > 0 && (
        <div className="search__container-suggestion-box">
          <h3>Latest Trends:</h3>
          <ul>
            {suggestions.map((suggestion, index) => (
              <>
                <li key={index}>
                  <img src={suggestion} alt="" />
                </li>
                <li key={index}>
                  <img src={suggestion} alt="" />
                </li>
              </>
            ))}
          </ul>
        </div>
      )} */}
      {suggestions.length > 0 && (
        <div className="search__container-suggestion-box">
          <h3>Popular Suggestions:</h3>
          <ul>
            {suggestions.map((suggestion, index) => (
              <>
                <li key={index}>{suggestion}</li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
