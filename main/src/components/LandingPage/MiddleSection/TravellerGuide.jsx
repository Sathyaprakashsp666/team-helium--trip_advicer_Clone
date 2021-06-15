import React from "react";
import styles from "./MiddleSection.module.css";
import { Link } from "react-router-dom";

const TravellerGuide = () => {
  return (
    <div>
      <p className={styles.traveller_guide_header}>Traveller Guides</p>
      <div className={styles.traveller_guide_cont}>
        <div>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b5/6d/78/weltgrosste-klosterbibliothek.jpg?w=400&h=-1&s=1"
            alt=""
            width="90%"
          />
          <Link className={styles.traveller_guide_link}>
            Libraries of the world
          </Link>
          <p className={styles.traveller_guide_items}>10 items</p>
          <p className={styles.traveller_guide_logo}>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/bf/4f/56/tripadvisor.jpg?w=100&h=-1&s=1"
              alt=""
              width="20px"
            />
            &nbsp; By Tripadvicer
          </p>
        </div>
        <div>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/82/90/ab/playa-de-ses-illetes.jpg?w=400&h=300&s=1"
            alt=""
            width="90%"
          />
          <Link className={styles.traveller_guide_link}>
            Europe's best Beaches, 2019
          </Link>
          <p className={styles.traveller_guide_items}>10 items</p>
          <p className={styles.traveller_guide_logo}>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/bf/4f/56/tripadvisor.jpg?w=100&h=-1&s=1"
              alt=""
              width="20px"
            />
            &nbsp; By Tripadvicer
          </p>
        </div>
        <div>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/0b/c1/a1/manuel-anotonio.jpg?w=400&h=300&s=1"
            alt=""
            width="90%"
          />
          <Link className={styles.traveller_guide_link}>
            World's best Beaches , 2019
          </Link>
          <p className={styles.traveller_guide_items}>10 items</p>
          <p className={styles.traveller_guide_logo}>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/bf/4f/56/tripadvisor.jpg?w=100&h=-1&s=1"
              alt=""
              width="20px"
            />{" "}
            &nbsp; By Tripadvicer
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravellerGuide;
