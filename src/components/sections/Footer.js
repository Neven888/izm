import React from "react";

const Footer = () => {
    return (
        <div classNameName="container footer">
        <div className="row mt-5 pt-5 pb-3">
            <div className="col-md-4 mb-4 mb-md-0">
                <img src="img/piklogo.png" alt="Smile Logo" className="mx-5" style={{ maxWidth: "380px" }} />
            </div>    

            <div className="col-md-2 mb-4 mb-md-0">
                <h6 className="fw-bold">LOREM IPSUM</h6>
                <ul className="list-unstyled footerlist">
                <li className="nav-link py-1"><a href="#">Many</a></li>
                <li className="nav-link py-1"><a href="#">Anything</a></li>
                <li className="nav-link py-1"><a href="#">Predefined To</a></li>
                <li className="nav-link py-1"><a href="#">Combin</a></li>
                <li className="nav-link py-1"><a href="#">Section</a></li>
                <li className="nav-link py-1"><a href="#">Commod</a></li>
                </ul>
            </div>
            <div className="col-md-2 mb-4 mb-md-0">
                <h6 className="fw-bold">SOMES</h6>
                <ul className="list-unstyled footerlist">
                <li className="nav-link py-1"><a href="#">Lorem Ipsum</a></li>
                <li className="nav-link py-1 py-1"><a href="#">Any</a></li>
                <li className="nav-link py-1"><a href="#">Finibus Bonorum</a></li>
                <li className="nav-link py-1"><a href="#">Rackham</a></li>
                <li className="nav-link py-1"><a href="#">Undoubtable Source</a></li>
                </ul>
            </div>
            <div className="col-md-4">
            <h6 className="fw-bold">KONTAKTIRAJ NAS</h6>
            <ul className="list-unstyled footerlist">
                <li className="my-3"><i className="fa-regular fa-envelope"></i> udrugapik@gmail.com</li>
                <li className="my-3"><i className="fa-solid fa-phone-volume"></i> 099 213 8815</li>
                <li className="my-3"><i className="fa-solid fa-location-dot"></i> Ulica Marsovog polja 4, 52100 Pula</li>
            </ul>
            
            <div className="mt-2">
                <a href="https://www.facebook.com/profile.php?id=61567413837704" className="text-dark me-3"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/pivari.istre.i.kvarnera" className="text-dark me-3"><i className="fa-brands fa-instagram"></i></a>
            </div>
            </div>
            <div className="text-center mt-4 pt-3 border-top">
            <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
            </div>
        </div>
     </div>
    );
    }

export default Footer;