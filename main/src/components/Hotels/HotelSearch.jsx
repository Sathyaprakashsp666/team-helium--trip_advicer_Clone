import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import LeftSide from "./LeftSide";
import ReactPaginate from "react-paginate";
import "./hotel.css";
import FaqHotel from "./FaqHotel";
import BottomInfo from "./BottomInfo";
import HotelFooter from "./HotelFooter";
import { Links } from "../RentalPage/Links";
import RentalNavbar from "../RentalPage/RentalNavbar";

const HotelSearch = () => {
  const [sortByCost, setSortByCost] = useState(null);

  const handleChange = (e) => {
    setSortByCost(e.target.value);
  };
  console.log(sortByCost);

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

  const [hotelData, setHotelData] = useState([]);
  console.log(hotelData);
  const [page, setPage] = useState(0);

  const infoperPage = 15;
  const pagevisited = page * infoperPage;

  const displayHotel =
    hotelData &&
    hotelData
      ?.sort(sortCondition)
      .slice(pagevisited, pagevisited + infoperPage)
      .map((item) => {
        return (
          <>
            <div className="show-hotel-main-div">
              <div className="hotel_thumbnail">
                <img src={item.hotel_image} alt="hotel_image"></img>
              </div>
              <div className="title-div">
                <h3>{item.Title}</h3>
              </div>
              <div className="all-info-div">
                <div className="partner-logo-div">
                  <img src={item.Thumbnail} alt="partner_logo"></img>

                  <h2>₹ {item.price}</h2>
                  <button className="view-deal-btn">View deal</button>
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
          </>
        );
      });

  const pageCount = Math.ceil(hotelData.length / infoperPage);
  const changePage = ({ selected }) => {
    setPage(selected);
  };
  const handleHotelSearch = async () => {
    const { data } = await axios.get(`https://json-mock-server-trip-advicer.herokuapp.com/pune`);
    setHotelData(data);
  };
  useEffect(() => {
    handleHotelSearch();
  }, []);
  return (
    <>
      <div>
        <RentalNavbar />
        <Links />
        <Header />
        <LeftSide hotelData={hotelData} />

        <div className="sorting-div">
          <p>
            <span>{hotelData.length} properties</span> in Pune
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

        {displayHotel}
        <div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousnBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"activePagination"}
          />
        </div>
        <FaqHotel />
        <BottomInfo />
        <HotelFooter />
      </div>
    </>
  );
};

export default HotelSearch;
