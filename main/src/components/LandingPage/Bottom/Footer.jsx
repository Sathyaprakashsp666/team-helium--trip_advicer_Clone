import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const about = [
    "About Us",
    "Press",
    "Resources and Policies",
    "Career",
    "Content Integrity",
  ];
  const explore = [
    "Write a review",
    "Add a place",
    "Join",
    "Traveller's Choice",
    "GreenLeaders",
    "Help Center",
    "Travel Article",
  ];
  const bussiness = [
    "Owners & DMO/CVB",
    "Bussiness Advantage",
    "Sponcered Placements",
    "Get The App",
    "iPhone App",
    "Android App",
  ];
  return (
    <div className={styles.footer_cont_top}>
      <div className={styles.footer_cont}>
        <div className={styles.footer_cont_div}>
          <div>
            <p className={styles.footer_cont_heading}>About Trip Advicer</p>
            {about.map((item) => {
              return (
                <>
                  <Link to="" className={styles.footer_cont_links}>
                    {item}
                  </Link>
                </>
              );
            })}
          </div>
          <div>
            <p className={styles.footer_cont_heading}> Explore</p>
            {explore.map((item) => {
              return (
                <>
                  <Link to="" className={styles.footer_cont_links}>
                    {item}
                  </Link>
                </>
              );
            })}
          </div>
          <div>
            <p className={styles.footer_cont_heading}> Do Bussiness With Us</p>
            {bussiness.map((item) => {
              return (
                <>
                  <Link to="" className={styles.footer_cont_links}>
                    {item}
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        <div>
          <p className={styles.footer_cont_heading}>TripAdvicer Sites</p>
          <br />
        </div>
      </div>
      <div className={styles.footer_botton_cont}>
        <div className={styles.footer_botton_cont_left}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "20%" }}>
              <img
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                alt=""
                width="40px"
              />
            </div>
            <div style={{ lineHeight: "2px" }}>
              <p style={{ fontSize: "10px" }}>
                © 2021 TripAdvisor LLC All rights reserved.
              </p>
              <Link to="" className={styles.textDec}>
                Terms of Use Privact and cookies Statement Coockie Consent Site
                Map How the site works
              </Link>
            </div>
          </div>
          <div>
            <p className={styles.footer_botton_cont_left_para}>
              This is the version of our website addressed to speakers of
              English in India. If you are a resident of another country or
              region, please select the appropriate version of Tripadvisor for
              your country or region in the drop-down menu. more{" "}
            </p>
          </div>
        </div>
        <div className={styles.footer_botton_cont_right}>
          <div className={styles.btns}>
            <button>PLN</button>
            <button>IND</button>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <IoLogoFacebook />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaPinterestSquare />
            </div>
            <div>
              <AiFillInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
