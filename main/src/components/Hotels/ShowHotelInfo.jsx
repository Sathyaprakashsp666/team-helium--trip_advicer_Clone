import React from "react";
import "./hotel.css";

const ShowHotelInfo = (item) => {

  //console.log(item);
  return (
    <div className="show-hotel-main-div">
      <div className="hotel_thumbnail">
        <img src={item.ZVAUHZqh} alt="hotel_image"></img>
      </div>
      <div className="title-div">
        <h3>{item.Title}</h3>
      </div>
      <div className="all-info-div">
        <div className="partner-logo-div">
          <img src={item.Thumbnail} alt="partner_logo"></img>

          <h2>₹{item.price}</h2>
          <button>View deal</button>
        </div>
        <div></div>
        <div className="facility-div">
          <p>{item.review_count}</p>
          <p>{item.popindex}</p>
          <li>{item.text}</li>
          <li>{item.text1}</li>
        </div>
      </div>
    </div>
  );
};

export default ShowHotelInfo;
