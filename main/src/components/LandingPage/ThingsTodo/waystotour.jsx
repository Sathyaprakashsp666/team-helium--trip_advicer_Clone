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
const WaysToTourDhubai = ({ deviceType }) => {
    const [data,setData] = React.useState([])

    function getData(){
        // This is placed inside 
        axios.get("https://json-mock-server-trip-advicer.herokuapp.com/ways_to_tour_dhubai")
        .then(res => {
            const value = res.data
            console.log(value);
          
          setData(value);
        })
        .catch(error=>console.log(error))
    }
    React.useEffect(() => {getData()},[])
    {images = data.map((item) =>{ return( [item.img,item.text,item.tour,item.cost])})}
    console.log(images);
    return (
        <div  style={{marginLeft:"25%"}}>
        <div  style={{marginLeft:"-6%", marginTop:"100px"}}>
            <h2 style={{fontWeight:"bold",fontFamily:"sans-serif"}}>Ways to tour Abu Dhabi</h2>
            <h4 style={{color:"grey",marginBottom:"10px"}}>Book these experiences for a close-up look at Abu Dhabi</h4>
            </div>    
            <Carousel
                ssr
                partialVisbile
                deviceType={deviceType}
                itemClass="image-item"
                responsive={responsive}
                itemClass={styles.wayspadd}
                containerClass = {styles.wayscontainer}
                >
                {images.slice(0, 11).map(image => {
                    return (
                        <div>
                    <Image
                        draggable={false}
                        style={{ width: "90%", height: "100%" }}
                        src={image[0]}
                    />
                     <h3 style={{width:"350px"}}>{image[1]}</h3>
                    <p>{image[2]}</p>
                    <p style={{fontWeight:700,fontSize:"24px"}}>{image[3]}</p>
                                        </div>
                    );
                })}
            </Carousel>
        </div>
    )
}


// export default Simple;
export {WaysToTourDhubai}