import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import { Image } from "semantic-ui-react";
import axios from "axios";
import React from "react";
import styles from './abhu.module.css'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
let images = []
const PopularThings = ({ deviceType }) => {
    const [data,setData] = React.useState([])

    function getData(){
        // This is placed inside 
        axios.get("https://json-mock-server-trip-advicer.herokuapp.com/popular_things_todo")
        .then(res => {
            const value = res.data
            console.log(value);
          
          setData(value);
        })
        .catch(error=>console.log(error))
    }
    React.useEffect(() => {getData()},[])
    {images = data.map((item) =>{ return( [item.img,item.text])})}
    console.log(images);
    return (
        <div>
            <h2 style={{marginLeft:"21%",marginTop:"200px",fontWeight:650,marginBottom:"20px"}}>Popular things to do</h2>
            <Carousel
             partialVisbile = {false}
                ssr
                deviceType={deviceType}
                itemClass="image-item"
                responsive={responsive}
                containerClass="carousel-container"
                // centerMode={true} 
                itemClass={styles.padd}
                containerClass = {styles.container}
                >
                {images.slice(0, 11).map(image => {
                    return (
                        <div>
                    <Image
                        draggable={false}
                        style={{ width: "70%", height: "100%" }}
                        src={image[0]}
                    />
                    <h3 style={{color: "white",marginTop:"-50px",marginLeft:"10px",fontWeight:700}}>{image[1]}</h3>
                    
                    </div>
                    );
                })}
            </Carousel>
            <hr style={{marginTop:"120px",width:"1400px"}}/>
        </div>
    )
}

export {PopularThings}


