// https://json-mock-server-trip-advicer.herokuapp.com/rentals
import React from "react";
import styles from "./RentalPage.module.css";
import RentalsContainer from "./RentalContainer";

const RentalPage = () => {
  return (
    <div>
      <h1>Rental Page</h1>
      <div className={styles.rentalas_top_cont}>
        <div className={styles.rentals_left_cont}></div>
        <div className={styles.rentals_right_cont}>
          <RentalsContainer />
        </div>
      </div>
    </div>
  );
};

export default RentalPage;
