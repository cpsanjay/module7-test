import React, { useState } from "react";
import "./Footer.css";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Twitter from "../../images/twitter.svg";

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
              <a href="">About Us</a>{" "}
            </li>
            <li>
              <a href="">Carrier</a>
            </li>
            <li>
              <a href="">We are hiring</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-form_individual">
          <h4 className="footer-form_head">Legal</h4>
          <ul>
            <li>
              <a href="">About Us</a>{" "}
            </li>
            <li>
              <a href="">Carrier</a>
            </li>
            <li>
              <a href="">We are hiring</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-form_individual">
          <h4 className="footer-form_head">Features</h4>
          <ul>
            <li>
              <a href="">Business Marketing</a>{" "}
            </li>
            <li>
              <a href="">User Analytic</a>
            </li>
            <li>
              <a href="">Live Chat</a>
            </li>
            <li>
              <a href="">Unlimited Support</a>
            </li>
          </ul>
        </div>
        <div className="footer-form_individual">
          <h4 className="footer-form_head">Resources</h4>
          <ul>
            <li>
              <a href="">IOS & Android</a>{" "}
            </li>
            <li>
              <a href="">Watch a Demo</a>
            </li>
            <li>
              <a href="">Customers</a>
            </li>
            <li>
              <a href="">API</a>
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
