import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Buttonn } from "./Buttonn";
import { Hotels } from "./Hotels";
import { Image } from "./Image";
import styles from "./NavBar.module.css";
import { NavSub } from "./Navsub";
import { Search } from "./Search";

// import { AbhuDhabi } from "../../LandingPage/ThingsTodo/AbhuDhabi";




import { AbhuDhabi } from "../../LandingPage/ThingsTodo/AbhuDhabi";

function NavBar() {
  return (
    <div>
      <div>
        <div className={styles.direction}>
          <Link to="/">
            {" "}
            <Image
              cls={styles.image}
              src="https://static.tacdn.com/img2/brand_refresh/special/pride_month_Tripadvisor_lockup_horizontal_secondary.svg"
            />{" "}
          </Link>
          <div style={{ marginLeft: "540px" }}>
            <Link to="/edit" className={styles.link}>
              <NavSub
                text={"Review"}
                src="https://static.thenounproject.com/png/1416596-200.png"
              />
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/trips">
              <NavSub
                text="Trips"
                src="https://cdn0.iconfinder.com/data/icons/feather/96/heart-512.png"
              />
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/alerts">
              <NavSub
                text="Alerts"
                src="https://cdn4.iconfinder.com/data/icons/hodgepodge-free/32/bell_ring_notification_alarm-512.png"
              />
            </Link>
          </div>
          <div>
            <Link to='/login'>
              <Buttonn cls={styles.button} value="Sign in" />
            </Link>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "20px", marginTop: "50px" }}>
        <div className={styles.firstbut}>
          <Button
            className={styles.firstbutbb}
            value={
              <Link className={styles.link} to="/hotel">
                <Hotels
                  value="Hotels"
                  src="https://cdn3.iconfinder.com/data/icons/housicon-pt-one-line/64/Bed_Sleep_Hotel_Rest-2-256.png"
                />
              </Link>
            }
          />
        </div>
        <div className={styles.firstbutbb}>
          <Button
            value={
              <Link className={styles.link}>
                <Hotels
                  value={
                    <p>
                      Holiday
                      <br />
                      Homes
                    </p>
                  }
                  src="https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/home-alt-256.png"
                />
              </Link>
            }
          />
        </div>
        <div>
          <Button
            value={
              <Link className={styles.link} to='/things'>
                <Hotels
                  value={
                    <p>
                      Things to
                      <br />
                      do
                    </p>
                  }
                  src="https://cdn3.iconfinder.com/data/icons/lineapp-icons-for-mobile-app/100/History-512.png"
                />
              </Link>
            }
          />
        </div>
        <div>
          <Button
            value={
              <Link className={styles.link}>
                <Hotels
                  value={<p>Restaura...</p>}
                  src="https://cdn4.iconfinder.com/data/icons/hotel-and-hotel-services-2/85/restaurant_meal_dinner_fork_knife-256.png"
                />
              </Link>
            }
          />
        </div>
        <div>
          <Button
            value={
              <Link className={styles.link}>
                <Hotels
                  value={
                    <p>
                      Write a <br /> review
                    </p>
                  }
                  src="https://cdn0.iconfinder.com/data/icons/eon-ui-i/32/compose_write_review_pencil-256.png"
                />
              </Link>
            }
          />
        </div>
        <Button
          value={
            <Link className={styles.link}>
              <Hotels
                value={
                  <p>
                    Travel <br /> Forums
                  </p>
                }
                src="https://cdn4.iconfinder.com/data/icons/epic-outlines/30/messages-128.png"
              />
            </Link>
          }
        />
        <div>
          <Button
            value={
              <Link className={styles.link}>
                <Hotels value={<p>More ...</p>} />
              </Link>
            }
          />
        </div>
      </div>
      <div>
        <Search />
      </div>
     <AbhuDhabi />
    </div>
  );
}
export { NavBar };
