import "./Navbar.css";
import React from "react";
import Profile from "../../images/profile.svg";
import Search from "../../images/search.svg";
import Cart from "../../images/cart.svg";
import Wishlist from "../../images/wishlist.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-link-container">
          <div className="navbar-logo">
            <Link to="/">AccioJob</Link>
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
          </ul>
        </div>
        <ul className="nav-cart">
          <li>
            <Link to="/login">
              <img src={Profile} alt="profile-icon" className="nav-icon" />
              <div className="nav-cart_login">Login / Register</div>
            </Link>
          </li>
          <li>
            <Link>
              <img src={Search} alt="" className="nav-icon" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={Cart} alt="" className="nav-icon" />
              <div>{cart.cartTotalQuantity}</div>
            </Link>
          </li>
          <li>
            <Link>
              <img src={Wishlist} alt="" className="nav-icon" />
              <div>1</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
