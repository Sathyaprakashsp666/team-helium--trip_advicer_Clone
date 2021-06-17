import React from "react";
import styles from "./Links.module.css";
import { NavLink } from "react-router-dom";
import '../../index.css'

import { BiDotsHorizontalRounded } from 'react-icons/bi'

const Links = () => {
  return (
    <>
   
      <div className={styles.links__cont}>
        <div>
          <NavLink to="/vagamoon" activeClassName="active">Vagamon</NavLink>
        </div>
        <div>
          <NavLink to="/hotel" activeClassName="active">Hotels</NavLink>
        </div>
        <div>
          <NavLink to="/things" activeClassName="active">Things to do</NavLink>
        </div>
        <div>
          <NavLink to="/hotel" activeClassName="active">Restaurents</NavLink>
        </div>
        <div>
          <NavLink to="/hotel" activeClassName="active">Flights</NavLink>
        </div>
        <div>
          <NavLink to="/hotel" activeClassName="active">Holiday Homes</NavLink>
        </div>
        <div>
          <NavLink to="/hotel" activeClassName="active">Shopping</NavLink>
        </div>
        <div>
          <NavLink to="/hotel" activeClassName="active">Package Holidays</NavLink>
        </div>
        <div>
          <NavLink to="/hotel" activeClassName="active">Cruises</NavLink>
        </div>
        <div>
          <NavLink to="/hotel">Car Hire</NavLink>
        </div>
        <div><BiDotsHorizontalRounded/></div>
      </div>
    </>
  );
};

export { Links };
