import React from "react";
import './Loading.css';
const Loading = () => {
    return (
       <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img src="/img/beer.gif" alt="Beer loading" width="150" />
      <p style={{ marginTop: "15px", fontWeight: "bold", color: "#c69c6d" }}>
       Punimo piva, samo malo strpljenja!
      </p>
    </div>
    );
    }

export default Loading;