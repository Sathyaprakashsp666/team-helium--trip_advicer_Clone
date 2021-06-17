import React, { useState } from "react";
import styles from "./RentalPage.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillLock } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import { Label } from "semantic-ui-react";

const RentalsContainer = (props) => {
  const {
    reviews,
    id,
    title,
    bathrooms,
    bedrooms,
    sleeps,
    match,
    imgs,
    price,
    about,
    user_reviews,
    stove,
    Grill,
    Dining_Seats,
    Double_Beds,
  } = props;
  const { user_title, user_review } = user_reviews;
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [index, setIndex] = useState(0);
  const [pricebtn, setPricebtn] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [days, setDays] = useState(1);

  const handleStart = (e) => {
    // const date = new Date().getDate()
    setStart(e.target.value);
  };
  const handleEnd = (e) => {
    setEnd(e.target.value);
  };

  const submitData = () => {
    setPricebtn(true);
    // console.log(`'start is' ${start}`);
    // console.log(`'end is' ${end}`);

    //to get days from start and end date
    var startDate = Date.parse(start);
    var endDate = Date.parse(end);
    var timeDiff = endDate - startDate;
    let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    // console.log(daysDiff);
    setDays(daysDiff);
    setStart("");
    setEnd("");
  };

  //image slider
  const checkNumber = (number) => {
    if (number >= 3) {
      return 0;
    }
    if (number <= 0) {
      return 3;
    }
    return number;
  };
  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  //show more

  const showMore = () => {
    setShowMoreInfo(!showMoreInfo);
  };
  return (
    <>
      <div className={styles.container_top}>
        {/* image container */}

        <button className={styles.prevnext_btn} onClick={prev}>
          <IoIosArrowBack />
        </button>

        <div>
          <img src={imgs[index]} alt="" height="100%" width="115%" />
        </div>

        <button className={styles.prevnext_btn} onClick={next}>
          <IoIosArrowForward />
        </button>

        {/* info container */}
        <div className={styles.info_cont}>
          <p className={styles.title}>{title} </p>
          <div className={styles.gray}>
            <img
              src="https://image.flaticon.com/icons/png/512/992/992001.png"
              width="5%"
            />{" "}
            {reviews} reviews
          </div>
          <div className={styles.gray}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAD39/eUlJSPj4/u7u4TExMhISHr6+seHh4FBQWWlpb6+vrKysq0tLSdnZ3d3d29vb2Li4vExMQpKSmtra3S0tLZ2dlfX1+CgoJFRUU7OzsnJyfl5eWkpKRoaGhWVlZ4eHgyMjJ9fX1jY2NKSkpvb29JSUkQEBA+Pj5h0ub6AAAHh0lEQVR4nO2d63qiOhRAWwQqcgcBEUHEy9T3f8Gj45gEDPcIiWevH/2q0XSvgklIdvDrCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4x1DExOimp1iX804Vkd35YintfvHqW2R+4xZHV507xNGobpOgPnd4TNA/XbBB0Z07MmbUnKjS3HExRKIaenOHxRCPJmiQr9B+xEMjBWidv4WL7XQpIqmN+3KLYnhApWFdU8Q9IXI4UEp36AhOHhg7UH+3phQifWfyuNjhIAtK4bNoRW9pxUBagSEY8g4YgiH/gCEY8g8YgiH/gCEY8g8YgmG1utQJQ9P0rSCzbXsh337YmeWaphlGzrLjYt4/jKUT3eoyXetely0v7nUFln+rK3TS7iExMTTS0LUP+TbZNSxUrbTiet57gRk1r3YpkRl4+/O10BpW9dRdss0Pthumbf+20YZG5Mb5ut8Ko5ZsdDOlVJaa2emqtVdA8FucD1bUoDnO0Anyda94CNQkNsmDqZhxMnipcp0HdfOBIwzT7Do0oCfayf9XmX/pd+goXG3aaTHc0DmMjejBOrud6dngM6HMhXIgBxpKDFel1gEjvzvxa6iDDJ2CXUyMKaqHcZBhNE/wHakoDjGUms4qLTlvLkfP82RZXixuP26/xod9vu3Zo/z9u+ttvj/E5cqOl805aWqW1pVoBxjGtGo3nh6YS0ky6romQ5IUx83kw7bVbHuQM9eRbpXV1XWrbGkGureh/bPjsYZKpcIkzqLaWKjxKa5+qpE76W7XTK1HXVKUxUmlklK4AwxL+RmXoD2pih5apFebq2IR9hu5IhTrQlZUyrsYYGijmrRs3EVHuCfC2o9bZ5Yy/NksLegOMFygM2rgf5wAr0GPX0c30Jm/IJ8eY9iQStWZ74Y/3xedueGC8pa+sDSkBwaGYDgWMOwDGDb8eTBsQUoj03etTL9dF5zyP8n6R1PVFe1SY7VSVe1nnfzJT7frEz2zLNcPO89CTmsoOaZr2cfN8MmlEmqyOdqWazpNw8RpDI3It/TL9Y37F4qNZ/nU6cN3GxqhJefT7VxQc9kyy0f0jYaGGexHTwYOQtsHplEfGBNDxfWqF6BTs45d5T2G9pfp7b75YOf5+MKVmeHPdAKdQPEwM+SWsYYDNgppxfl0lLMsC25d+H0pMV0qtJ5NUpbpfdHwNj4Ibq+WD6dzMaB5Ll2a9zdcbrr9md/tZRHceq4lpeK+LEPfyuxD3vFTn5NLNH0N0z29Usx6rwf++1LfHTdYnFoXOvbYsZ+hcqFX+CCJA5/FEeuCYgYv06Rlx+csZy/D+jZmq7vUxbs3k7p6/Qz6v/amh6H5W/PfCubdURMFdRPo5r24s6FBPUG3WTSxD53Ipq5HX4zuhiHl/WeLpzwbycopMYYdDSl9YBGMn/FmjRS8Nj76VxdD9aULjHndCZW+LP3hKzrKyylH/S82T2dnFSmru/ymvLjGb/Kg+5KNMpT5+/i9YsiDDbdz9OtDSM/DDLPJIx1OMMBwx2sDSsepjs8prym/YDN5jCMxTv0MaVuheefYx5B6SwLu8bobxpRiEYgbDYnR9mX62BhBXBK9NpS4LbrOEBor8GB8Wy0ixj4D8564gEhSq94Zo75ELPD9S9RyAU7uOs0TGTNwtxiUnseHcKr5s3expDen+NjKc0XGDHylQX7ecGqkCJdLzeB7JSX4SXzPExYZF3ODJ3pxn4iHOyL3FE9wj4EHn+gpEQfcr+CRzfMZlpmtPIB9njPYeJ131sDY8bI+jBbqWOQB8wCa0t49HuO7CX7GSUqepo+5XrTh4HfmwNiBpokfWxVQX7GfOS52oLXrR3+BBjRiX1WQoFFo8ffhS9sqPni/3f1RWHr0IZSOGpouFnn2ogqazbh/8lB/L+oMGw0063bv83NS91NAJ2b+RZyyfsu7RMInGxf0uyhraV1ICUOFtP0ckJWCO4vV3EExBRmGeFSatL9NIFB34eIBjnArho2glBkLT+cf5w6KKYenVob7Rv7zSvqALoJjPG0TtL9NIFCXf/nMIQ1x/ZR/oaTUxq/2EA7URWzx9e8nDdqIYVuBZ97MuYNiivnU2n2hdMVPmWh7gIZqKp6WEisHqg202PSLB3BH+ZPA6UO1ibMfAxiKDxiKDxiKz//JUF98EjrFcO5xFmPAUHzAUHzAUHzAUHzAUHzAsIqhKHN/U2wFpeUeyz0Ml76XX4udxhu74pp79bdX6Wzon/j+Pnl1U7Pegl7RbBi233B8frbU9QhU3Ggoyjd107a8osImw8Z7DHEFJfcXlTUYHqaPdDCvG0VQUb2hRauJW17W6FFJrWH1KwN4p7qfCRXUGorSyjyptjaooM5QIt6c6KHEI6FO3mVI6mlIfAp5TrQh7vhR+SS2GuKegu8cDZwqW7mLQJuhgW7Xxnu6G1rOVssj8TZD3JLyvgkDb60ot6ZthkTCDe+glKdyQlCbIfoE8591ijJJa/bf1xiiOxDwvwmjJn20zRAtTvG/Px/tvy/vD+1syP+20ppQwRAMOQIMwRAM5wcM23KiBDKsAQzBcH7AEAzBcH7A8D+uCJyUNzDCtAAAAABJRU5ErkJggg=="
              width="10px"
            />{" "}
            {bedrooms} bedrooms
          </div>
          <div className={styles.gray}>
            <img
              src="https://image.flaticon.com/icons/png/128/2933/2933754.png"
              width="10px"
            />{" "}
            {bathrooms} bathrooms
          </div>
          <div className={styles.gray}>
            <img
              src="https://t3.ftcdn.net/jpg/02/65/99/00/240_F_265990024_t90F9QbS9u0ot7s2of7SuDiQ5H4Z4XLn.jpg"
              width="20px"
            />
            sleeps {sleeps}
          </div>
          <div className={styles.gray}>
            <img
              src="https://image.flaticon.com/icons/png/128/907/907881.png"
              width="10px"
            />
            Match : {sleeps}
          </div>
          <div>
            <button className={styles.more_info} onClick={showMore}>
              More Info
              <AiFillCaretDown />
            </button>
          </div>
        </div>
        {/* price containet */}
        <div>
          <div
            style={{ display: "flex", width: "250px", margin: "10px" }}
            className={styles.calender}
          >
            <label>
              Check in
              <input type="date" onChange={handleStart} value={start} />
            </label>
            <label>
              Check out
              <input type="date" onChange={handleEnd} value={end} />
            </label>
          </div>
          {pricebtn ? (
            <p className={styles.price_cont}>
              {" "}
              <span className={styles.pln}>PLN &nbsp;{price} </span> per night{" "}
              <br />
              PLN {price * days} per {days} &nbsp;nights
            </p>
          ) : (
            ""
          )}
          <button onClick={submitData} className={styles.price_btn}>
            {pricebtn ? "Book Now" : "Show Price"}
          </button>
          <p>
            <AiFillLock />
            Payment Protection
          </p>
        </div>
      </div>
      {showMoreInfo ? (
        <div className={styles.more_info_cont}>
          <div>
            <p className={styles.more_info_review}>Most recent reviews</p>
            <img
              src="https://image.flaticon.com/icons/png/512/991/991986.png"
              alt=""
              width="50px"
            />
            <h6 className={styles.more_info_title}>
              {user_reviews[0].user_title}
            </h6>
            <p className={styles.more_info_para}>
              {user_reviews[0].user_review}
            </p>
            <h6 className={styles.more_info_title}>
              {user_reviews[1].user_title}
            </h6>
            <img
              src="https://image.flaticon.com/icons/png/512/991/991986.png"
              alt=""
              width="50px"
            />
            <p className={styles.more_info_para}>
              {user_reviews[1].user_review}
            </p>
          </div>
          <div>
            <h5 className={styles.more_info_review}> About This Property</h5>
            <p className={styles.more_info_about}>{about}</p>
            <h5 className={styles.more_info_review}>Amenities</h5>
            <li>Pets Allowed :</li>
            <li>Kid Friendly:</li>
            <li>Smoking Allowed</li>
            <li>{Dining_Seats ? <FcCheckmark /> : ""} Dining Seats (3)</li>
            <li> {Double_Beds ? <FcCheckmark /> : ""}Double Beds:(2)</li>
            <li> {stove ? <FcCheckmark /> : ""}Stove</li>
            <li>{Grill ? <FcCheckmark /> : ""} Grill</li>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RentalsContainer;
