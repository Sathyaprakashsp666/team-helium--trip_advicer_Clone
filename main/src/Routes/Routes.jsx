import React from "react";
import Home from "../components/LandingPage/Home";
import { Route, Switch } from "react-router-dom";
import RentalPage from "../components/RentalPage/RentalPage";
import Login from "../components/Login";

import HotelSearch from "../components/Hotels/HotelSearch";
import {AbhuDhabi} from "../components/LandingPage/ThingsTodo/AbhuDhabi"

const AllRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/vagamoon">
          <RentalPage />
        </Route>
        <Route path="/hotel">
          <HotelSearch />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/things">
          <AbhuDhabi />
        </Route>

        <Route>404 Page Not Found</Route>
      </Switch>
    </div>
  );
};

export default AllRoutes;
