import { TextField } from "@mui/material";
import React from "react";
import "./Cities.css";
import citiesData from "../../data/countries+states+cities.json";

export default function Cities({ selectedState, selectedCountry }) {
  //   console.log(citiesData, "CitiesData");
  //   console.log(selectedState, "selectedState");

  const indexOfCountry = citiesData?.findIndex(
    (elm) => elm.name === selectedCountry
  );

  console.log(indexOfCountry, "indexOfCountry");

  const indexOfState = citiesData[indexOfCountry]?.states?.findIndex(
    (elm) => elm.name === selectedState
  );
  console.log(indexOfState, "indexOfState");

  //   citiesData[indexOfCountry].states

  citiesData?.map((country, i) => {
    return country?.states?.map((state, i) => {
      //   console.log(state, "STATE");
      state.cities.map((city, i) => {
        // console.log(city.name, "city");
      });
    });
  });

  const mouseEnterOnCityName = (cityObj) => {
    console.log(cityObj, "cityObj");
  };

  return (
    <div className="citie-container">
      <div className="heading-sm citie-header">Cities</div>

      <div className="citie-search-result-wrapper">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search Cities"
          variant="outlined"
          style={{ marginBottom: "20px" }}
        />
        {selectedCountry && selectedState
          ? citiesData[indexOfCountry].states[indexOfState].cities.map(
              (city, i) => {
                return (
                  <div
                    key={i}
                    className={`city-name`}
                    title={`City Name: ${city.name}`}
                    onMouseEnter={() => mouseEnterOnCityName(city)}
                  >
                    {city.name}
                  </div>
                );
              }
            )
          : ""}
      </div>
    </div>
  );
}
