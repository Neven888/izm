import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
    return (
        <>
        <Slider {...{arrows: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000}} className="slider">
        <div className="slide">
          <img src="https://placehold.co/1428x671" alt="Image 1" className="slajd" />
          <div className="title">LOREM IPSUM IS SIMPLYS</div>
          <div className="subtitle">Lorem Ipsum is simply dummy text of the printing</div>
          <div className="button rounded-pill brojgumb">(123) 456-7890</div>
        </div>
        <div className="slide">
          <img src="https://placehold.co/1428x671" alt="Image 1" className="slajd" />
          <div className="title">LOREM IPSUM IS SIMPLYS</div>
          <div className="subtitle">Lorem Ipsum is simply dummy text of the printing</div>
          <div className="button rounded-pill brojgumb">(123) 456-7890</div>
        </div>
        <div className="slide">
          <img src="https://placehold.co/1428x671" alt="Image 1" className="slajd" />
          <div className="title">LOREM IPSUM IS SIMPLYS</div>
          <div className="subtitle">Lorem Ipsum is simply dummy text of the printing</div>
          <div className="button rounded-pill brojgumb">(123) 456-7890</div>
        </div>
      </Slider>
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
          <div class="button rounded-pill m-3">YOURS MORE</div>
        </div>
      </div>
      </div>
    </section>

    <section class="drugi-section py-5">
      <div class="container drugi-section">
        <div class="row">
        <div class="col-6">
          <h1>LOREM IPSUM IS SIMPLY DO TEXT OF THE PRINTING TYPESETTING INDUSTRY.</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy texm h,h t ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div class="button rounded-pill plavigumb p-1">YOURS MORE</div>
        </div>
        <div class="col-6 text-center">
          <img src="https://placehold.co/400x300" />
        </div>
      </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div className="row text-center py-5">
          <h1 className="pb-4 mb-4">LOREM IPSUM IS SIMPLY DUMMY</h1>
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