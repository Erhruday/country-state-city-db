import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./States.css";
import coutryWiseState from "../../data/countries+states.json";

export default function States({
  selectedCountry,
  setSelectedState,
  selectedState,
}) {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const indexOfCountry = coutryWiseState?.findIndex(
    (elm) => elm.name === selectedCountry
  );
  console.log(coutryWiseState[indexOfCountry], "coutry Wise State");

  useEffect(() => {
    const filteredResults = coutryWiseState[indexOfCountry]?.states?.filter(
      (item) => item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResult(filteredResults);
  }, [query, indexOfCountry]);

  return (
    <div className="state-container">
      <div className="heading-sm state-header">States</div>

      <div className="state-search-result-wrapper">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search States"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        {searchResult?.map((itm, i) => {
          return (
            <div
              key={i}
              className={`state-name ${selectedState === itm.name && "active"}`}
              onClick={() => setSelectedState(itm.name)}
            >
              {itm.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
