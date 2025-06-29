import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg font-proxima-nova">
          <div className="container py-5">
            <a className="navbar-brand" href="/"><img src="img/piklogo.png" alt="PIK logo" style={{ maxWidth: "130px" }} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link headtext" to="/">POČETNA</Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link headtext" to="/many">O NAMA</Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link headtext" to="/packages">EDUKACIJE</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link headtext" to="/variousversion">PIVARSKA ZBIVANJA</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link headtext" to="/majorit">PIVARSKI BLOG</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link headtext" to="/combine">KONTAKT</Link>
                </li>
                <li className="nav-item rounded-pill">
                  <Link className="nav-link" to="/commodus">UČLANI SE</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
    }

export default Header;