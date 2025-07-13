import React from "react";

const Footer = () => {
    return (
        <div className="container footer mt-auto">
        <div className="row mt-5 pt-5 pb-3">
            <div className="col-md-4 mb-4 mb-md-0">
                <img src="img/piklogo.png" alt="Smile Logo" className="mx-5" style={{ maxWidth: "380px" }} />
            </div>    

            <div className="col-md-8 align-content-center md-end text-center">
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
            <p>I voda plemenita kapljica posta, kad joj dodaše hmelja i slada dosta.</p>
            </div>
        </div>
     </div>
    );
    }

export default Footer;