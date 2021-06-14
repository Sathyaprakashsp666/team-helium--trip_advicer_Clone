import React from "react";
import Home from "../components/LandingPage/Home";
import { Route, Switch } from "react-router-dom";
import RentalPage from "../components/RentalPage/RentalPage";


import HotelSearch from "../components/Hotels/HotelSearch";

const AllRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/vagamoon">
          <RentalPage/>
        </Route>
        <Route path="/hotel">
          <HotelSearch />
        </Route>
      </Switch>
    </div>
  );
};

export default AllRoutes;
