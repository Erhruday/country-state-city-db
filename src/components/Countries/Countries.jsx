import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Countries.css";
import countriesData from "../../data/countries.json";

export default function Countries({ selectedCountry, setSelectedCountry }) {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  console.log(countriesData, "countriesData");

  useEffect(() => {
    const filteredResults = countriesData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResult(filteredResults);
  }, [query]);

  const countryOnClick = (countryName) => {
    setSelectedCountry(countryName);
    console.log(countryName);
  };

  return (
    <div className="country-container">
      <div className="heading-sm country-header">Countries</div>

      <div className="countries-search-wrapper">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search Countries"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        {searchResult.map((elm) => {
          return (
            <div
              key={elm.id}
              title={` Country Name: ${elm.name}
Capital: ${elm.capital}
Region: ${elm.region}
Currency Symbol: ${elm.currency_symbol}
Currency Name: ${elm.currency_name}

            
            `}
              onClick={(event) => countryOnClick(elm.name)}
            >
              <div
                className={`country-name ${
                  selectedCountry === elm.name && "active"
                }`}
              >
                {elm.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
