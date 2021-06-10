import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

import React, { useState } from "react";
const links = [
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/36/37/eb/caption.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/60/b0/bd/bora-bora.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/dd/caption.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f4/70/caption.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d8/43/20/cayo-levantado-is-the.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cd/04/e4/caption.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bf/69/b0/caption.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5e/c2/caption.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bf/69/b0/caption.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5e/c2/caption.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bf/72/8e/caption.jpg?w=500&h=500&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/48/36/4f/caption.jpg?w=500&h=500&s=1",
];
const ImageSlider = () => {
  const [images, setImages] = useState(links);

  const [currentImageIdx, setCurrentImagIdx] = useState(0);

  const prevSlide = () => {
    // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0;

    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    // check if we need to start over from the first index
    const resetIndex = currentImageIdx === images.length - 1;

    const index = resetIndex ? 0 : currentImageIdx + 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  // create a new array with 5 elements from the source images
  const activeImageSourcesFromState = images.slice(
    currentImageIdx,
    currentImageIdx + 4
  );

  // check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 4
      ? // if the imageSourcesToDisplay's length is lower than 5 images than append missing images from the beginning of the original array
        [
          ...activeImageSourcesFromState,
          ...images.slice(0, 4 - activeImageSourcesFromState.length),
        ]
      : activeImageSourcesFromState;

  return (
    <div style={{ marginLeft: "50px" }}>
      <button onClick={prevSlide}>
        <FaArrowAltCircleLeft  style={{height:"50px", width:"50px",borderRadius:"50px"}}/>
      </button>
      {imageSourcesToDisplay.map((image, index) => (
        <img 
          key={index}
          src={image}
          alt=""
          style={{
            margin: "10px",
            width: "270px",
            height: "270px",
          }}
        />
      ))}
      <button onClick={nextSlide}>
        <FaArrowAltCircleRight  style={{height:"50px", width:"50px",borderRadius:"50px"}} />
      </button>
    </div>
  );
};

export default ImageSlider;
