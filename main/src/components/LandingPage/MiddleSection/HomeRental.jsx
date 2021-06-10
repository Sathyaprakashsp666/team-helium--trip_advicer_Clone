import React from "react";
import styles from "./MiddleSection.module.css";
import data from "./data";
import { Link } from "react-router-dom";

const HomeRental = () => {
  return (
    <>
      <p className={styles.header}>Home Rental Near You</p>
      <div className={styles.homerental_top_cont}>
        <div className={styles.left_cont}>
          <p>
            We think you'd enjoy
            <br />
            these homes for a quick
            <br />
            trip out of town
          </p>
        </div>
        <div className={styles.right_cont}>
          {data.map((item) => {
            return (
              <Link to="">
                <div>
                  <img src={item.img} alt="" width="100%" />
                  <Link className={styles.homerental_location}>
                    {item.location}
                  </Link>
                  <p className={styles.homerental_count}>{item.count}rentals</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeRental;
