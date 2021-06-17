// import React from "react";
// import { Carousel } from "react-responsive-carousel";

// let Images = [
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/07/ec/88/photo5jpg.jpg?w=400&h=400&s=1",
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/fb/98/bb/grand-mosque.jpg?w=400&h=400&s=1",
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ba/54/24/photo0jpg.jpg?w=400&h=400&s=1",
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/fb/98/3e/abu-dhabi-tour-with-grand.jpg?w=400&h=400&s=1",
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ba/54/26/photo2jpg.jpg?w=400&h=400&s=1",
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ba/54/25/photo1jpg.jpg?w=400&h=400&s=1",
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/1a/46/89/caption.jpg?w=400&h=400&s=1",
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/1a/2e/66/ig-ralphemerson-deperalta.jpg?w=400&h=400&s=1"
// ];

// export default () => (
//   <Carousel autoPlay>
//         {Images.map((imgg) => {
//       return (
//         <div>
//           <img src={imgg} />
//         </div>
//       );
//     })}
//   </Carousel>
// );
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
// import { Image } from "semantic-ui-react";



function TopAttrComp(props){
    const [data,setData] = React.useState([])
    let images = []
    function getData(){
        // This is placed inside 
        axios.get(`http://localhost:3000/${props.value}`)
        .then(res => {
            const value = res.data
            console.log(value);
          
          setData(value);
        })
        .catch(error=>console.log(error))
    }
    React.useEffect(() => {getData()},[])
    {images = data.map((item) =>{ return( [item.imgs,item.txt,item.site,item.status,item.commentby,item.comment])})}
    console.log(images);
    return(
        <div>
            {images.slice(0, 2).map(image => {
                    return (
                        <div>
                            <Carousel axis={"horizontal"}>
                        
                            {image[0].map((imgg) => {return (
                            
                                <div>
                                    <img style={{ width: "20%", height: "100%" }} src={imgg}/>
                                    <h3>{image[1]}</h3>
                                    <p>{image[2]}</p>
                                    <p>{image[3]}</p>
                                    <div >
                                        <img src={image[4][0]} alt="" style={{borderRadius:"50px"}} />
                                        <p style={{marginTop:"-40px",marginLeft:"60px"}}>{image[4][1]}</p>
                                    </div>
                                    <p>{image[5]}</p>
                                </div> 
                        )})}
                        
                        
                     </Carousel>
                         <div>
                             {console.log(image[0])}
                         </div>
   
                    
                     </div>
                     );
                 })}

         </div>
     )
 }
 export {TopAttrComp}