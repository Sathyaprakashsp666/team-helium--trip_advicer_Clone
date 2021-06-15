import React, { useState } from "react";

const LeftSide = () => {
  const [rangeVlaue, setRnageValue] = useState(0);
  const handleOnRnageChange = (e, data) => {
    setRnageValue(e.target.value)
    console.log(rangeVlaue)
  }
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
        <input className="input-range"
          max={12000}
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
        <span className="checkbox-input">Air conditioning  180</span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Romantic    15</span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">5 stars 11</span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">4 stars & up 108</span>
        <br />
      </div>
      <hr />
      <div className="left-Popular-section">
        <h4>Amenities</h4>
        <input type="checkbox" />
        <span className="checkbox-input">Free Wifi   173</span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Breakfast included    161</span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Pool   42</span>
        <br />
        <input type="checkbox" />
        <span className="checkbox-input">Free parking 177</span>
        <br />
      </div>
      <hr />
    </div>
  );
};

export default LeftSide;
