import React from "react";
import Home from "../components/LandingPage/Home";
import { Route, Switch } from "react-router-dom";

import FetchingRental from "../components/LandingPage/FetchingRentals/FetchingRental";

import HotelSearch from "../components/Hotels/HotelSearch";

const AllRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/vagamoon">
          <FetchingRental />
        </Route>
        <Route path="/hotel">
          <HotelSearch />
        </Route>
      </Switch>
    </div>
  );
};

export default AllRoutes;
