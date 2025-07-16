import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LatestPostsSlider from "../parts/LatestPostsSlider";
import { Link } from "react-router-dom";
import Edukacije from "./Edukacije";
import Sponzori from "../parts/Sponzori";

const Home = () => {
    return (
        <>
        <LatestPostsSlider />
        <Edukacije />

    <section className="drugi-section py-5">
       <div className="overlay"></div>
      <div className="container drugi-section-content">
        <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <h1>O NAMA</h1>
          <p>Udruga pivara Istre i Kvarnera osnovana je s ciljem okupljanja ljubitelja pivarstva i razmjene znanja i vještina u proizvodnji piva. 
              Naša misija je promovirati pivarstvo kao hobi, poticati zajednička druženja te unaprjeđivati vještine i iskustva putem povratnih informacija kroz kušanja. Organiziranjem edukativnih predavanja, seminara, tečajeva, radionica i manifestacija, Udruga aktivno doprinosi razvoju pivarske kulture i jača društvene veze sa srodnim organizacijama. 
              S entuzijazmom gradimo zajednicu posvećenu znanju, kreativnosti i zajedničkim iskustvima u svijetu pivarstva.</p>
          <Link className="button rounded-pill istakni" to="/prijava-za-clanstvo">POSTANI ČLAN</Link>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src={process.env.PUBLIC_URL + '/img/pikcrew.jpeg'} className="img-fluid pikclanovi center-img" alt="PIK članovi" />
        </div>
      </div>
      </div>
    </section>
    
    <section>
      <div className="container">
        <div className="row text-center py-5">
          <h1 className="pb-4 mb-4">SPONZORI I PARNERI:</h1>
          <Sponzori />
        </div>
      </div>
    </section>
    </>
    );
    }

export default Home;