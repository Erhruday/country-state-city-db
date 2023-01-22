import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Cities from "../Cities/Cities";
import Countries from "../Countries/Countries";
import States from "../States/States";

export default function Contents() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Countries
            setSelectedCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
          />
        </Grid>
        <Grid item xs={4}>
          <States
            selectedCountry={selectedCountry}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
          />
        </Grid>
        <Grid item xs={4}>
          <Cities
            selectedState={selectedState}
            selectedCountry={selectedCountry}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
