import React from "react";
import RentalNavbar from "../RentalPage/RentalNavbar"

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "340px",
        border: "1px solid black",
      }}
    >
      <RentalNavbar />
    </div>
  );
};

export default Header;
