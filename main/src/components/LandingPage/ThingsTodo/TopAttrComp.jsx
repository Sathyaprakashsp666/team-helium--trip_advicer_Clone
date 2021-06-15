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
                        <Carousel>
                        <div>
                        {image[0].map((imgg) => {return (
                            
                             <div>
                            <img
                        style={{ width: "20%", height: "100%" }}
                        src={imgg}
                    />
                        </div> 
                        )})}
                        </div>
                        
                        </Carousel>
   
                    
                    </div>
                    );
                })}
               
                    
        </div>
    )
}
export {TopAttrComp}