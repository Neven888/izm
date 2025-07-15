import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AvatarDropdown from "../parts/AvatarDropdown";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Dohvati user iz localStorage kad se komponenta mounta
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = () => {
    // Simuliraj login
    const fakeUser = { name: "Marko", email: "marko@example.com" };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };


    return (
        <nav className="navbar navbar-expand-lg pill-navbar">
          <div className="container-fluid d-flex flex-column flex-lg-row justify-content-between align-items-center py-5 px-3 px-md-5">
            <a className="navbar-brand mx-auto mx-lg-0" href="/"><img src="img/piklogo.png" alt="PIK logo" style={{ maxWidth: "130px" }} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link headtext" to="/">POČETNA</Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link headtext" to="/o-nama">O NAMA</Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link headtext" to="/edukacije">EDUKACIJE</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link headtext" to="/pivarska-zbivanja">PIVARSKA ZBIVANJA</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link headtext" to="/pivarski-blog">PIVARSKI BLOG</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link headtext" to="/kontakt">KONTAKT</Link>
                </li>
                <li className="nav-item spade-pill">
                   <Link className="nav-link spade-link" to="/prijava-za-clanstvo">
                    <svg
                      className="spade-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 40 40"
                    >
                      <path
                        d="m9.9958 40c7.2112-1.603 7.9872-5.826 8.5312-13.594-1.253 2.075-3.531 3.607-7.25 3.594-6.1124-0.021-10.207-3.576-8.75-11.25 1.4688-7.737 12.469-10.737 17.469-18.75 5 8.0128 16 11.013 17.469 18.75 1.456 7.674-2.469 11.228-8.75 11.25-3.719 0.013-5.997-1.519-7.25-3.594 0.544 7.768 1.319 11.991 8.531 13.594h-20z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="spade-text">UČLANI SE</span>
                  </Link>
                </li>
                <div className="d-flex align-items-center">
                  <AvatarDropdown />
                </div>
              </ul>
            </div>
          </div>
        </nav>
    );
    }

export default Header;