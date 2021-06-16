import React, { useState } from "react";
import ShowHotelInfo from "./ShowHotelInfo";

const SortingDiv = ({ hoteldata }) => {
  //console.log(hoteldata[0])
//   const defaultValue = [];
//   defaultValue.push(hoteldata);
//   console.log(defaultValue);

  const [optionValue, setOptionValue] = useState("");
  //console.log(optionValue)

  // const lowToHigh = [];
  // const highToLow = [];



  // hoteldata.sort(function (a, b) {
  //   return Number(a.price) - Number(b.price);
  // });
  // lowToHigh.push(hoteldata);
  // console.log(lowToHigh[0]);



  // hoteldata.sort(function (a, b) {
  //   return Number(b.price) - Number(a.price);
  // });
  // highToLow.push(hoteldata);
  // console.log(highToLow[0]);

  return (
    <>
      <div className="sorting-div">
        <p>
          <span>1,653 properties</span> in Pune
        </p>
        <div className="sorting-options">
          sort by:
          <select onChange={(e) => setOptionValue(e.target.value)}>
            <option value="travel_ranked">Traveller Ranked</option>
            <option value="lowToHigh">Price (low to high)</option>
            <option value="highToLow">Price (high to low)</option>
          </select>
        </div>
      </div>
      {/* {hoteldata.map((item) => {
        return (
          <>
            <ShowHotelInfo item={item} />
          </>
        );
      })} */}
    </>
  );
};

export default SortingDiv;
