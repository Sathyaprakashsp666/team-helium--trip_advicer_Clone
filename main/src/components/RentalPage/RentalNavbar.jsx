import React, { useContext } from "react";
import styles from "./RentalNavbar.module.css";
import { GrSearch } from "react-icons/gr";
// import { MdRateReview } from "react-icons/md";
// import { GrSearch } from "react-icons/gr";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Link } from "react-router-dom";

const RentalNavbar = () => {
  const { isAuth, url } = useContext(AuthContext);

  return (
    <div className={styles.navbar__top_cont}>
      <div>
        <Link to="/">
          <div>
            <img
              src="https://static.tacdn.com/img2/brand_refresh/special/pride_month_Tripadvisor_lockup_horizontal_secondary.svg"
              alt=""
              width="100%"
            />
          </div>
        </Link>
        <div className={styles.navbar__search}>
          <button>
            <GrSearch />
          </button>
          <input type="search" />
        </div>
      </div>
      <div className={styles.navbar__top_right_cont}>
        <div>
          <button>
            <span>
              <img
                src="https://static.thenounproject.com/png/1416596-200.png"
                alt=""
                width="20px"
              />
            </span>
            <span>Review</span>
          </button>
        </div>
        <div>
          <button>
            <img
              src=" https://cdn0.iconfinder.com/data/icons/feather/96/heart-512.png"
              alt=""
              width="20px"
            />
            <span>Trips</span>
          </button>
        </div>
        <div>
          <button>
            <img
              src=" https://cdn4.iconfinder.com/data/icons/hodgepodge-free/32/bell_ring_notification_alarm-512.png"
              alt=""
              width="20px"
            />
            <span>Alert</span>
          </button>
        </div>
        <div>
          {isAuth ? (
            <div>
              <img
                style={{ borderRadius: "50%" }}
                src={url}
                alt="img"
                width="100%"
              />
            </div>
          ) : (
            <Link to="/login"  className={styles.navbar_signin}>
              {" "}
              <button>Sign in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentalNavbar;
