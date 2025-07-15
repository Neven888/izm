import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./AvatarDropdown.css";
import { useNavigate } from "react-router-dom";

const AvatarDropdown = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogin = () => {
    const fakeUser = { name: "Marko", email: "marko@example.com" };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

  if (!user) {
    return (
      <button className="btn btn-light rounded-pill px-3 py-1" onClick={handleLogin}>
        Prijava
      </button>
    );
  }

  return (
    <div className="avatar-dropdown position-relative" ref={dropdownRef}>
      <div
        className="avatar-circle"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        title={user.name}
      >
        {user.name.charAt(0).toUpperCase()}
      </div>
      {dropdownOpen && (
        <div className="dropdown-menu-custom">
          <p className="dropdown-user-name">{user.name}</p>
          <p className="dropdown-user-email">{user.email}</p>
          <hr />
          <Link className="dropdown-link" to="/moj-profil">Moj profil</Link>
          <Link className="dropdown-link" to="/pik-liga">PIK liga</Link>
          <button className="dropdown-link logout-button" onClick={handleLogout}>Odjava</button>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
