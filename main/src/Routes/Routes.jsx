import React from "react";
import Home from "../components/LandingPage/Home";
import { Route, Switch } from "react-router-dom";
import FetchingRental from "../components/LandingPage/FetchingRentals/FetchingRental";


const AllRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/vagamoon">
          <FetchingRental/>
        </Route>
      </Switch>
    </div>
  );
};

export default AllRoutes;
