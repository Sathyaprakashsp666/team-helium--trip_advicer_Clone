import { DayTrips } from "./MultiCarousel";
import {Outdoor} from './outdoor'
import {Cruises} from './Cruises'
import styles from './abhu.module.css'
function DayTripss(){
    return(
        <div>
            <hr className={styles.hr} />
            <DayTrips/>
            <hr/>
            <hr className={styles.hr}/>
           <Outdoor/>
           <hr className={styles.hr}/>
           <hr className={styles.hr}/>
            <Cruises/>

        </div>
    )
}
export {DayTripss}