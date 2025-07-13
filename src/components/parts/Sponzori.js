import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sponzori() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Link to="https://www.hopline.hu/" target="_blank">
            <img src="img/hopline.png" alt="Image" className="responsiv" />
          </Link>
        </div>
        <div>
          <Link to="https://hopsishop.com/" target="_blank">
            <img src="img/hopsi.png" alt="Image" className="responsiv" />
          </Link>
        </div>
        <div>
          <Link to="https://www.mr-malt.com/" target="_blank">
            <img src="img/mrmalt.png" alt="Image" className="responsiv" />
          </Link>
        </div>
        <div>
          <Link to="https://brewtiga.hr/" target="_blank">
            <img src="img/brewtiga.png" alt="Image" className="responsiv" />
          </Link>
        </div>
        <div>
          <Link to="https://www.svezapivo.hr/" target="_blank">
            <img src="img/svezapivo.png" alt="Image" className="responsiv" />
          </Link>
        </div>
        <div>
          <Link to="https://badassbarley.com/" target="_blank">
            <img src="img/badass.png" alt="Image" className="responsiv" />
          </Link>
        </div>
        <div>
          <Link to="https://www.nautilis.eu/" target="_blank">
            <img src="img/nautilis.png" alt="Image" className="responsiv" />
          </Link>
        </div>
        <div>
          <Link to="https://www.lallemandbrewing.com/" target="_blank">
            <img src="img/lallemand.png" alt="Image" className="responsiv" />
          </Link>
        </div>
      </Slider>
    </div>
  );
}

export default Sponzori;