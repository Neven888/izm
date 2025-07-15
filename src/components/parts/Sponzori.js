import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sponzori.css";

function Sponzori() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
    {
      breakpoint: 1024, // tablet
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  };
return (
    <div className="slider-container sponzori-slider">
        <Slider {...settings}>
            <div className="sponsor-slide">
                <a href="https://www.hopline.hu/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="img/hopline.png"
                        alt="Hopline logo featuring stylized hop cone, company branding, displayed in a sponsor carousel with other brewing industry brands"
                        className="sponsor-logo"
                    />
                </a>
            </div>
            <div className="sponsor-slide">
                <a href="https://hopsishop.com/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="img/hopsi.png"
                        alt="Hopsi Shop logo with playful green hop illustration and company name, part of a sponsor slider among brewing suppliers"
                        className="sponsor-logo"
                    />
                </a>
            </div>
            <div className="sponsor-slide">
                <a href="https://www.mr-malt.com/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="img/mrmalt.png"
                        alt="Mr Malt logo with stylized text and barley graphic, representing a malt supplier, shown in a sponsor carousel"
                        className="sponsor-logo"
                    />
                </a>
            </div>
         
            <div className="sponsor-slide">
                <a href="https://www.svezapivo.hr/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="img/svezapivo.png"
                        alt="Sve Za Pivo logo with Croatian text Sve Za Pivo and beer-related graphics, included in a sponsor carousel for brewing event"
                        className="sponsor-logo"
                    />
                </a>
            </div>
            <div className="sponsor-slide">
                <a href="https://badassbarley.com/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="img/badass.png"
                        alt="Badass Barley logo with bold text and barley illustration, energetic branding, part of a sponsor slider for brewing industry"
                        className="sponsor-logo"
                    />
                </a>
            </div>
            <div className="sponsor-slide">
                <a href="https://www.nautilis.eu/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="img/nautilis.png"
                        alt="Nautilis logo with nautical theme and company name, featured in a sponsor carousel with other brewing suppliers"
                        className="sponsor-logo"
                    />
                </a>
            </div>
            <div className="sponsor-slide">
                <a href="https://www.lallemandbrewing.com/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="img/lallemand.png"
                        alt="Lallemand Brewing logo with red oval and white text Lallemand, professional and clean, shown in a sponsor slider for brewing event"
                        className="sponsor-logo"
                    />
                </a>
            </div>
        </Slider>
    </div>
);
}

export default Sponzori;