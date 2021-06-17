import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import {PopularThings} from './PopularThings';
import {WaysToTourDhubai} from './waystotour'
import {Cultural} from './culturalandtheme'
import {TopAttractions} from './TopAttractions'
import {DayTrips1} from './DayTrips' 
function AbhuDhabi(){
    return (
        <div>
            <PopularThings/> 
           <WaysToTourDhubai/>
           <Cultural/>
           <TopAttractions/>
           <DayTrips1/>
        </div>
    )
}
export {AbhuDhabi}