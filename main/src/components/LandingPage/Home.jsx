import React from "react";
<<<<<<< HEAD

import BlogBox from "./BottomSection/BlogBox";
import Footer from "./BottomSection/Footer";
import ImageSlider from "./BottomSection/ImageSlider";
import HomeRental from "./MiddleSection/HomeRental";
import TravellerGuide from "./MiddleSection/TravellerGuide";
import { NavBAr } from "./NavBar";
||||||| ceadbbf
import { NavBAr } from "./NavBar";
=======
import { NavBar } from "./NavBar/NavBar";
>>>>>>> NavBar

const Home = () => {
  return (
    <div>
      {/* Navbar add below   @ kandur*/}
<<<<<<< HEAD
        <NavBar/>
||||||| 64f2efa
        <NavBAr/>
=======
      <NavBAr />
>>>>>>> 725c067a1c61cf1f93e17dee69e6b333c8e14921
      {/* middle section add below  @ uday*/}
      <HomeRental />
      <TravellerGuide />
      {/* bottom section add below @ satya*/}
      <ImageSlider />
      <br />
      <br />
      <br />
      <br />
      <BlogBox />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
