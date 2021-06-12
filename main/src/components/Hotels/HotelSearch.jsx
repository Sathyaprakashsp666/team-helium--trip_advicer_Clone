import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import LeftSide from "./LeftSide";
import ShowHotelInfo from "./ShowHotelInfo";
import SortingDiv from "./SortingDiv";

const HotelSearch = () => {
    //   const [hotel, setHotel] = useState("");
    const [hotelData, setHotelData] = useState([]);
    // const [page, setPage] = useState(1)

    const handleHotelSearch = async () => {
        const { data } = await axios.get(`http://localhost:4500/pune`);
        setHotelData(data);
    };
    useEffect(() => {
        handleHotelSearch();
    }, []);
    //console.log(hotelData);
    return (
        <div>
            <Header />
            <LeftSide />
            <SortingDiv  hotelData={hotelData}/>

            {hotelData.map((item) => {
                return (
                    <>
                        <ShowHotelInfo item={item} />
                    </>
                );
            })}
            {/* <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev Page</button>
            <button disabled={hotelData.length < 15} onClick={() => setPage(page + 1)}>Next Page</button> */}
        </div>
    );
};

export default HotelSearch;
