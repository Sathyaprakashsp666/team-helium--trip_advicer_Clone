import React from 'react'
import  Carousel  from './TopAttrComp'
import {TopAttrComp} from './TopAttrComp'

function TopAttractions(){

    return(
        <div>
            <h2> Top Attractions in Dhubai</h2> 
            <TopAttrComp value={"Top_Attractions"} />
            <TopAttrComp value={"TopAttr2"} />
            <TopAttrComp value={"TopAttr3"} />

            {/* <Carousel/> */}
        </div>
    )
}
export{TopAttractions}

// import React from "react";
// import { Carousel } from "react-responsive-carousel";



// let Images = [
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/07/ec/88/photo5jpg.jpg?w=400&h=400&s=1",
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/fb/98/bb/grand-mosque.jpg?w=400&h=400&s=1",
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ba/54/24/photo0jpg.jpg?w=400&h=400&s=1",
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/fb/98/3e/abu-dhabi-tour-with-grand.jpg?w=400&h=400&s=1",
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ba/54/26/photo2jpg.jpg?w=400&h=400&s=1",
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ba/54/25/photo1jpg.jpg?w=400&h=400&s=1",
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/1a/46/89/caption.jpg?w=400&h=400&s=1",
//     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/1a/2e/66/ig-ralphemerson-deperalta.jpg?w=400&h=400&s=1"
//   ];


//   export default () => (
//       <div>
//             <Carousel>
//                     <div>
//                     {Images.map((imgg) => {
                        
//                         return(
//                             <img src={imgg} alt="" />

//                         )})}
                        
//                     </div>
                
//                 </Carousel>
                
//       </div>
   
// );
  