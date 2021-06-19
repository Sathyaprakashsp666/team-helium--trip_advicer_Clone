import React from "react";
import "react-multi-carousel/lib/styles.css";
import { PopularThings } from "./PopularThings";
import { WaysToTourDhubai } from "./waystotour";
import { Cultural } from "./culturalandtheme";
import {TopAttractions} from './TopAttractions'
import styles from './abhu.module.css'
import {DayTripss} from './DayTrips' 
import {Link} from 'react-router-dom'
import { Button } from "../NavBar/Button";
import { Buttonn } from "../NavBar/Buttonn";
import { NavSub } from "../NavBar/Navsub";
import { Image } from "../NavBar/Image";
import { AuthContext } from "../../../ContextApi/AuthContext";
import styless from "../NavBar/NavBar.module.css";
import Footer from "./BottomSection/Footer"

function AbhuDhabi(){
    const { isAuth, url } = React.useContext(AuthContext);

    return (
        <div>
            <div style={{marginLeft:"17%",marginBottom:"20px"}}>
            <div className={styless.direction}>
          <Link to="/">
            {" "}
            <Image
              cls={styless.image}
              src="https://static.tacdn.com/img2/brand_refresh/special/pride_month_Tripadvisor_lockup_horizontal_secondary.svg"
            />{" "}
          </Link>
          <div>
              <input type="text" placeholder="search" style={{borderRadius:"10px" ,height:"60px" ,width:"300px",marginRight:"-800px"}}/>
          </div>
          <div style={{ marginLeft: "540px" }}>
            <Link to="/edit" className={styless.link_top}>
              <NavSub
                text={"Review"}
                src="https://static.thenounproject.com/png/1416596-200.png"
              />
            </Link>
          </div>
          <div>
            <Link className={styless.link_top} to="/trips">
              <NavSub
                text="Trips"
                src="https://cdn0.iconfinder.com/data/icons/feather/96/heart-512.png"
              />
            </Link>
          </div>
          <div>
            <Link className={styless.link_top} to="/alerts">
              <NavSub
                text="Alerts"
                src="https://cdn4.iconfinder.com/data/icons/hodgepodge-free/32/bell_ring_notification_alarm-512.png"
              />
            </Link>
          </div>
          <div>
            <Link to="/login">
              {isAuth ? (
                <div>
                  <img
                    style={{ borderRadius: "50%" }}
                    src={url}
                    alt=""
                    width="50%"
                  />
                </div>
              ) : (
                <Buttonn cls={styless.button} value="Sign in" />
              )}
            </Link>
          </div>
        </div>
      
            </div>
            <hr  />
            <div  style={{display:"flex",gap:"20px",fontSize:"20px",margin:"20px", marginLeft:"20%"}}>
                <Link style={{ textDecoration: 'none' , color: 'black'}}>AbhuDhabi</Link>
                <Link style={{ textDecoration: 'none',color: 'black' }}>Hotels</Link>
                <Link style={{ color: 'black' }} to="/things">Places to visit</Link>
                <Link style={{ textDecoration: 'none',color: 'black' }}>Restaurants</Link>
                <Link style={{ textDecoration: 'none',color: 'black' }} >Flights</Link>
                <Link style={{ textDecoration: 'none',color: 'black' }}>Holiday homes</Link>
                <Link style={{ textDecoration: 'none',color: 'black' }}>Shopping</Link>
                <Link style={{ textDecoration: 'none',color: 'black' }}>Package Holidays</Link>
                <Link style={{ textDecoration: 'none',color: 'black' }}>Cruises</Link>
                <Link style={{ textDecoration: 'none',color: 'black' }}>Car Hire</Link>

            </div>
            <hr/>
            <h1 className={styles.places}>Places to Visit in AbhuDhabi</h1>
            <PopularThings/> 
           <WaysToTourDhubai/>
           <TopAttractions/>
           <Cultural/>

           <DayTripss/>
           <Footer/>
        </div>
    )
    }
export { AbhuDhabi };
