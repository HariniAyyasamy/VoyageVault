import React, { useState } from "react";
import "./navbar.css";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive("navBar activeNavbar")
  };
  const removeNavbar = () => {
    setActive("navBar");
  };
                                                                    

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" /> VoyageVault
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to ="/" className="navLink">
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link to="/packages" className="navLink" onClick={removeNavbar}>
                Packages
              </Link>
            </li>

            <li className="navItem">
              <Link to="/shop" className="navLink" onClick={removeNavbar}>
                Shop
              </Link>
            </li>

            <li className="navItem">
              <Link to ="/About" className="navLink">
                About
              </Link>
            </li>

            

            <li className="navItem">
              <Link to="/Contact" className="navLink">
                Contact
              </Link>
            </li>

            <button className="btn">
              <a href="#"> BOOK NOW </a>
            </button>
          </ul>
        </div>
        
      </header>
    </section>
  );
};
export default Navbar