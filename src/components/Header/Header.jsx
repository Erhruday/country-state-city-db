import { Container } from "@mui/system";
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <Container maxWidth="lg">
        <h1>🌍 Country State City DB</h1>
      </Container>
    </div>
  );
}
