import React, { useState } from "react";

const LeftSide = ({ hotelData }) => {
  console.log(hotelData.length);
  const [rangeVlaue, setRnageValue] = useState(0);
  const handleOnRnageChange = (e) => {
    setRnageValue(e.target.value);
    console.log(rangeVlaue);
  };
  return (
    <div className="left-sidebar-div">
      <div className="left-head-section">
        <h3>COVID-19</h3>
        {/* <img src="https://static.tacdn.com/img2/icons/illustration-handwash.svg" alt=""/> */}
        <input type="checkbox" />
        <span className="checkbox-input">
          Properties taking safety measures
        </span>
      </div>
      <hr />
      <div className="left-deal-section">
        <h4>Deals</h4>
        <input type="checkbox" />
        <span className="checkbox-input">Free cancellation</span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Reserve now, pay at stay</span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Properties with special offers</span>
        <br />
      </div>
      <hr />
      <div className="left-price-slide-div">
        <h4>Price</h4>
        <h5>₹ 0 - ₹ {rangeVlaue}</h5>
        <input
          step={2}
          className="input-range"
          max={12500}
          min={0}
          value={rangeVlaue}
          onChange={handleOnRnageChange}
          type="range"
        ></input>
      </div>
      <hr />
      <div className="left-Popular-section">
        <h4>Popular</h4>
        <input type="checkbox" />
        <span className="checkbox-input">Air conditioning</span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Romantic</span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">5 stars</span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">4 stars & up </span>
        <br />
      </div>
      <hr />
      <div className="left-Popular-section">
        <h4>Amenities</h4>
        <input type="checkbox" />
        <span className="checkbox-input">Free Wifi </span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Breakfast included </span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Pool </span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Free parking</span>
        <br />
      </div>
      <hr />
      <div className="left-Popular-section">
        <h4>Hotel class</h4>
        <input type="checkbox" />
        <span className="checkbox-input">5 stars </span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">4 stars </span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">3 stars </span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">2 stars</span>
        <br />
      </div>
      <hr />
      <div className="left-Popular-section">
        <h4>Styles</h4>
        <input type="checkbox" />
        <span className="checkbox-input">Budget </span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Mid-range </span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Luxury </span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Family-friendly</span>
        <br />
      </div>
      <hr />
      <div className="left-Popular-section">
        <h4>Brands</h4>
        <input type="checkbox" />
        <span className="checkbox-input">OYO </span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">FabHotels </span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Treebo </span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Hyatt</span>
        <br />
      </div>
    </div>
  );
};

export default LeftSide;
