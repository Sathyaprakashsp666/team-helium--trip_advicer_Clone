
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import { Image } from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from './abhu.module.css' 

function TopAttrComp(props){
    const [data,setData] = React.useState([])
    let images = []
    function getData(){
        // This is placed inside 
        axios.get(`https://json-mock-server-trip-advicer.herokuapp.com/${props.value}`)
        .then(res => {
            const value = res.data
            console.log(value);
          
          setData(value);
        })
        .catch(error=>console.log(error))
    }
    React.useEffect(() => {getData()},[])
    {images = data.map((item) =>{ return( [item.imgs,item.text,item.site,item.status,item.commentby,item.comment])})}
    console.log(images);
    return(
        <div className={styles.flexcontainer} style={{marginBottom:"50px"}}>
            {images.slice(0, 4).map(image => {
                    return (< div >
                        <div  >
                            <Carousel width="96%">
                            {image[0].map((imgg) => {return (
                                    <div style={{height:"460px",}}>
                                        <Image style={{  height: "100%" }} src={imgg}alt="img"/>
                                    </div> 
                            )})}
                            </Carousel>
                            
                        <div style={{width: "80%"}}>
                        
                                    <h3 style={{fontWeight:600}}>{image[1]}</h3>
                                    <p>{image[2]}</p>
                                    <p>{image[3]}</p>
                                    <div >
                                        <Image src={image[4][0]} alt="" style={{borderRadius:"90px",width:"40px"}} />
                                        <p style={{marginTop:"-40px",marginLeft:"60px",fontWeight:"bold"}}>{image[4][1]}</p>
                                    </div>
                                    <p >{image[5]}</p>
                                    {console.log(image[1],image[2],image[3])}
                        </div>
                       </div>
                     </div>
                     );
                 })}
                
         </div>
     )
 }
 export {TopAttrComp}
