import React from "react";
import { Link } from "react-router-dom";
import "./RentalFooter.css";

const HotelFooter = () => {
  return (
    <div className="footer-main-div-comp">
      <div className="footer-terms-conditions">
        <div className="footer-t&c-info">
          <div className="footer-t-c-info-logo">
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
              alt="logo_image"
            />
          </div>
          <div className="All-rights">
            © 2021 TripAdvisor LLC All rights reserved.
          </div>
          <div className="footer-t-c-links">
            <Link className="terms-cond-link-styles">Terms of Use</Link>
            <Link className="terms-cond-link-styles">
              Privacy and Cookies Statement
            </Link>
            <Link className="terms-cond-link-styles">Cookie consent</Link>
            <Link className="terms-cond-link-styles">Site Map</Link>
            <Link className="terms-cond-link-styles">How the site works</Link>
          </div>
        </div>
        <div>
          <p className="copyright-info">
            This is the version of our website addressed to speakers of English
            in India. If you are a resident of another country or region, please
            select the appropriate version of Tripadvisor for your country or
            region in the drop-down menu. <Link className="more">more</Link>
          </p>
        </div>
      </div>
      <div className="currency-country">
        <select className="select-currency">
          <option>₹ INR</option>
        </select>
        <select className="select-country">
          <option>India</option>
        </select>
      </div>
    </div>
  );
};

export default HotelFooter;
