import React from "react";
<<<<<<< HEAD

import BlogBox from "./Bottom/BlogBox";
import Footer from "./Bottom/Footer";
import ImageSlider from "./Bottom/ImageSlider";
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
        <NavBar/>
      {/* middle section add below  @ uday*/}

      {/* bottom section add below @ satya*/}
      <ImageSlider /><br/><br/><br/><br/>
      <BlogBox /><br/><br/><br/><br/>
      <Footer/>
    </div>
  );
};

export default Home;
