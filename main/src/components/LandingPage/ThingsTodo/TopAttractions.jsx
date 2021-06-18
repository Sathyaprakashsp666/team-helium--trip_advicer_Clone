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

