import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import LeftSide from "./LeftSide";
import SortingDiv from "./SortingDiv";
import ReactPaginate from "react-paginate";
import "./hotel.css";

const HotelSearch = () => {
    const [hotelData, setHotelData] = useState([]);
    console.log(hotelData);
    const [page, setPage] = useState(0);

    const infoperPage = 15;
    const pagevisited = page * infoperPage;

    const displayHotel = hotelData.slice(pagevisited, pagevisited + infoperPage).map(item => {
        return (
            <>
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
            </>
        );
    })


    const pageCount = Math.ceil(hotelData.length / infoperPage)
    const changePage = ({ selected }) => {
        setPage(selected)
    }
    const handleHotelSearch = async () => {
        const { data } = await axios.get(`http://localhost:4500/pune`);
        setHotelData(data);
    };
    useEffect(() => {
        handleHotelSearch();
    }, []);
    return (
        <div>
            <Header />
            <LeftSide />

            <SortingDiv hoteldata={hotelData} />

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
        </div>
    );
};

export default HotelSearch;
