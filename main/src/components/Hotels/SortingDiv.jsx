import React, { useState } from "react";
import ShowHotelInfo from "./ShowHotelInfo";

const SortingDiv = ({ hoteldata }) => {
  const [sortByCost, setSortByCost] = useState(null);

  const handleChange = (e) => {
    setSortByCost(e.target.value);
  }
  console.log(sortByCost)

  const sortCondition = (a, b) => {
    if (sortByCost == null) {
      return null;
    }
    if (sortByCost === "lowtohigh") {
      return a.price - b.price;
    }
    if (sortByCost === "hightolow") {
      return b.price - a.price;
    }
    if (sortByCost === "rating") {
      return a.reviews - b.reviews;
    }
  };

  return (
    <>
      <div className="sorting-div">
        <p>
          <span>{hoteldata.length} properties</span> in Pune
        </p>
        <div className="sorting-options">
          sort by:
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
      {/* {hoteldata &&
            hoteldata?.sort(sortCondition).map((item, index) => {
              return (
                <>
                  <ShowHotelInfo {...item} key={index} />
                </>
              );
            })} */}
    </>
  );
};

export default SortingDiv;
