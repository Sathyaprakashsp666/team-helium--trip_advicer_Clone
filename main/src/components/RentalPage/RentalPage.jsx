// https://json-mock-server-trip-advicer.herokuapp.com/rentals
import React, { useState, useEffect } from "react";
import styles from "./RentalPage.module.css";
import RentalsContainer from "./RentalContainer";
import axios from "axios";

const RentalPage = () => {
  const [rentalData, setRentalData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://json-mock-server-trip-advicer.herokuapp.com/rentals")
      .then((res) => {
        console.log(res.data);
        setRentalData(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Rental Page</h1>
      <div className={styles.rentalas_top_cont}>
        <div className={styles.rentals_left_cont}></div>
        <div className={styles.rentals_right_cont}>
          <div className={styles.sort_cont}>
            <div>{rentalData.length} Rentals in Vagamoon</div>
            <div>
              <label for="rental"> Sort By:</label>
              <select name="rental" id="rental" form="rentalform">
                <option value="tripsort">Triadvicer Sort</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
                <option value="rating">Traveller Rating</option>
              </select>
            </div>
          </div>

          {rentalData.map((item, index) => {
            return (
              <>
                <RentalsContainer {...item} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RentalPage;
