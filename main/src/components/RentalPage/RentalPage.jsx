// https://json-mock-server-trip-advicer.herokuapp.com/rentals
import React, { useState, useEffect } from "react";
import styles from "./RentalPage.module.css";
import RentalsContainer from "./RentalContainer";
import axios from "axios";
import LeftContainer from "./LeftContainer";
import RentalNavbar from "./RentalNavbar";

const RentalPage = () => {
  const [rentalData, setRentalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIsLoading(true);
    axios
      .get("https://json-mock-server-trip-advicer.herokuapp.com/rentals")
      .then((res) => {
        console.log(res.data);
        setRentalData(res.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setIsError(true);
      });
  };

  return (
    <div>
      <RentalNavbar />
      <h1 className={styles.head_title}>Holiday Rentals in Vagamoon</h1>
      {/* <div className={styles.top_calender}>
        <div>
          <input type="date" />
        </div>
        <div>
          <input type="date" />
        </div>
        <div></div>
      </div> */}
      <div className={styles.rentalas_top_cont}>
        <div className={styles.rentals_left_cont}>
          <LeftContainer />
        </div>
        <div className={styles.rentals_right_cont}>
          <div className={styles.sort_cont}>
            <div>
              <span className={styles.rental_length}>
                {rentalData.length} Rentals
              </span>{" "}
              in Vagamoon
            </div>
            <div className={styles.sorting_cont}>
              <label for="rental"> Sort By:</label>
              <select name="rental" id="rental" form="rentalform">
                <option value="tripsort">Triadvicer Sort</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
                <option value="rating">Traveller Rating</option>
              </select>
            </div>
          </div>
          <div className={styles.loading}>
            {isLoading ? (
              <img
                src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                alt="....loading"
              />
            ) : (
              ""
            )}
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
