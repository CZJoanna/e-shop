import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { auth } from "../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <header className="header">
    <Link to="/" className="logo-box">
      <Logo />
    </Link>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/shop" className="nav__link">
            shop
          </Link>
        </li>
        <li className="nav__item">
          <Link to="#" className="nav__link">
            contact
          </Link>
        </li>
        <li className="nav__item">
          {currentUser ? (
            <div
              className="nav__link"
              onClick={() => {
                auth.signOut();
              }}
            >
              sign out
            </div>
          ) : (
            <Link to="/signin" className="nav__link">
              sign in/up
            </Link>
          )}
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
