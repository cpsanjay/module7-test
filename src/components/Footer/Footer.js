import React, { useState } from "react";
import "./Footer.css";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Twitter from "../../images/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://accio-test-m7-default-rtdb.asia-southeast1.firebasedatabase.app/newsletter.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );
    setEmail("");
  };

  return (
    <footer>
      <div className="footer-socials">
        <h2>Acciojob</h2>
        <div className="socials">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
      <div className="footer-form_grid">
        <div className="footer-form_individual">
          <h4 className="footer-form_head">Company Info</h4>
          <ul>
            <li>
              <Link>About Us</Link>{" "}
            </li>
            <li>
              <Link>Carrier</Link>
            </li>
            <li>
              <Link>We are hiring</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="footer-form_individual">
          <h4 className="footer-form_head">Legal</h4>
          <ul>
            <li>
              <Link>About Us</Link>{" "}
            </li>
            <li>
              <Link>Carrier</Link>
            </li>
            <li>
              <Link>We are hiring</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="footer-form_individual">
          <h4 className="footer-form_head">Features</h4>
          <ul>
            <li>
              <Link>Business Marketing</Link>{" "}
            </li>
            <li>
              <Link>User Analytic</Link>
            </li>
            <li>
              <Link>Live Chat</Link>
            </li>
            <li>
              <Link>Unlimited Support</Link>
            </li>
          </ul>
        </div>
        <div className="footer-form_individual">
          <h4 className="footer-form_head">Resources</h4>
          <ul>
            <li>
              <Link>IOS & Android</Link>
            </li>
            <li>
              <Link>Watch a Demo</Link>
            </li>
            <li>
              <Link>Customers</Link>
            </li>
            <li>
              <Link>API</Link>
            </li>
          </ul>
        </div>

        <div className="footer-form_individual">
          <h4>Get In Touch</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button type="submit">Subscribe</button>
          </form>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="footer-copyright">Made With ❤️ at Acciojob</div>
    </footer>
  );
};

export default Footer;
