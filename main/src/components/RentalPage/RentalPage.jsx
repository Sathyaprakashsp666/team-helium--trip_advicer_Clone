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
  const [sortByCost, setSortByCost] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIsLoading(true);
    axios
      .get("https://json-mock-server-trip-advicer.herokuapp.com/rentals")
      .then((res) => {
        // console.log(res.data);
        setRentalData(res.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setIsError(true);
      });
  };

  const handleChange = (e) => {
    setSortByCost(e.target.value);
  };
  console.log(sortByCost);

  const sortCondition = (a, b) => {
    if (sortByCost == null) {
      return null;
    }
    if (sortByCost == "lowtohigh") {
      return a.price - b.price;
    }
    if (sortByCost == "hightolow") {
      return b.price - a.price;
    }
    if (sortByCost == "rating") {
      return a.reviews - b.reviews;
    }
  };

  return (
    <div>
      <RentalNavbar />
      <h1 className={styles.head_title}>Holiday Rentals in Vagamoon</h1>

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
              <select
                name="rental"
                id="rental"
                form="rentalform"
                onChange={handleChange}
              >
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

          {rentalData &&
            rentalData?.sort(sortCondition).map((item, index) => {
              return (
                <>
                  <RentalsContainer {...item} key={index} />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RentalPage;
