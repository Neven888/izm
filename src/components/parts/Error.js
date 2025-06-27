import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = ({msg}) => {
  return (
    <div className="beer404-container">
      <div className="beer404-glass">
        <div className="beer404-foam" />
        <div className="beer404-fill" />
      </div>
      <h1>{msg} - Nestalo piva!</h1>
      <p>Stranica koju tražiš ne postoji... ali možda pivo postoji 🍺</p>
      <Link to="/" className="beer404-btn">Vrati me kući</Link>
    </div>
  );
};

export default Error;