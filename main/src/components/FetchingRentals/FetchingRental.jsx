// https://json-mock-server-trip-advicer.herokuapp.com/rentals

import React from "react";
import styles from "./FetchingRentals.module.css";
import RentalsContainer from "./RentalsContainer";
const FetchingRental = () => {
  return (
    <>
      <h1>Holiday Rentals in Vagamoon</h1>
      <div className={styles.rentalas_top_cont}>
        <div className={styles.rentals_left_cont}></div>
        <div className={styles.rentals_right_cont}>
          <RentalsContainer/>
        </div>
      </div>
    </>
  );
};

export default FetchingRental;