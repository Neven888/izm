import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LatestPostsSlider from "../parts/LatestPostsSlider";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <LatestPostsSlider />
    <section className="prvi-section py-4">
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-8 mx-5 text-center pomagaj">
          <img src="https://placehold.co/300x300" alt="Placeholder" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>Lorem Ipsum is Simply Dummy</p>
          <p>Lorem Ipsum is Simply Dummy Text Of The Printing Type</p>
          <div className="button rounded-pill m-3">YOURS MORE</div>
        </div>
      </div>
      </div>
    </section>

    <section className="drugi-section py-5">
       <div className="overlay"></div>
      <div className="container drugi-section-content">
        <div className="row">
        <div className="col-6">
          <h1>O NAMA</h1>
          <p>Udruga pivara Istre i Kvarnera osnovana je s ciljem okupljanja ljubitelja pivarstva i razmjene znanja i vještina u proizvodnji piva. 
Naša misija je promovirati pivarstvo kao hobi, poticati zajednička druženja te unaprjeđivati vještine i iskustva putem povratnih informacija kroz kušanja. Organiziranjem edukativnih predavanja, seminara, tečajeva, radionica i manifestacija, Udruga aktivno doprinosi razvoju pivarske kulture i jača društvene veze sa srodnim organizacijama. 
S entuzijazmom gradimo zajednicu posvećenu znanju, kreativnosti i zajedničkim iskustvima u svijetu pivarstva.</p>
          <Link className="button rounded-pill istakni" to="https://docs.google.com/forms/d/e/1FAIpQLSegyVPnlsW4zHwHLKPo2iRKhEyxnPIZHB6s35kb1xb43EoB0Q/viewform" target="_blank">POSTANI ČLAN</Link>
        </div>
        <div className="col-6 text-center">
          <img src="img/piklogo.png" className="img-fluid" />
        </div>
      </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row text-center py-5">
          <h1 className="pb-4 mb-4">GALERIJA</h1>
          <Slider {...{dots: true, arrows: false, infinite: true, speed: 500, slidesToShow: 5, slidesToScroll: 5, initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}} className="responsiv">
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
            <div>
              <img src="https://placehold.co/130x90" alt="Image" className="responsiv" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
    </>
    );
    }

export default Home;