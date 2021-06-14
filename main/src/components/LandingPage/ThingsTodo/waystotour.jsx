import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import { Image } from "semantic-ui-react";
import axios from "axios";
import React from "react";
// import styles from './abhu.module.css'
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
        axios.get("http://localhost:3000/ways_to_tour_dhubai")
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
        <div>
            <h2>Ways to tour Abu Dhabi</h2>
            <h4>Book these experiences for a close-up look at Abu Dhabi</h4>
            <Carousel
                ssr
                partialVisbile
                deviceType={deviceType}
                itemClass="image-item"
                responsive={responsive}
                >
                {images.slice(0, 11).map(image => {
                    return (
                        <div>
                    <Image
                        draggable={false}
                        style={{ width: "60%", height: "100%" }}
                        src={image[0]}
                    />
                    <h3>{image[1]}</h3>
                    <h4>{image[2]}</h4>
                    <h5>{image[3]}</h5>
                    </div>
                    );
                })}
            </Carousel>
        </div>
    )
}

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
//   return (
//     <Carousel
//       ssr
//       partialVisbile
//       deviceType={deviceType}
//       itemClass="image-item"
//       responsive={responsive}
//     >
//       {images.slice(0, 5).map(image => {
//         return (
//           <Image
//             draggable={false}
//             style={{ width: "100%", height: "100%" }}
//             src={image}
//           />
//         );
//       })}
//     </Carousel>
//   );
// };

// export default Simple;
export {WaysToTourDhubai}