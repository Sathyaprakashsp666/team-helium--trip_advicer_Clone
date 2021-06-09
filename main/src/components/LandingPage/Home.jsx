import React from "react";

import BlogBox from "./Bottom/BlogBox";
import Footer from "./Bottom/Footer";
import ImageSlider from "./Bottom/ImageSlider";
import { NavBAr } from "./NavBar";


const Home = () => {
  return (
    <div>
      {/* Navbar add below   @ kandur*/}
        <NavBAr/>
      {/* middle section add below  @ uday*/}

      {/* bottom section add below @ satya*/}
      <ImageSlider />
      <BlogBox /><br/><br/><br/><br/>
      <Footer/>
    </div>
  );
};

export default Home;
