import React from 'react'
import {TopAttrComp} from './TopAttrComp'
import styles from './abhu.module.css'

function TopAttractions(){

    return(
        <div>
            <hr className={styles.tophr}/>
            <hr  className={styles.tophr}/>
            <h2 className={styles.topattr}> Top Attractions in Dhubai</h2> 
            <TopAttrComp value={"Top_Attractions"} />
            <TopAttrComp value={"TopAttr2"} />
            <TopAttrComp value={"TopAttr3"} />
            <div>
                     <hr style={{marginTop:"180px",width:"1500px",marginBottom:"150px"}}/>
                 </div>
                 
        </div>
    )
}
export{TopAttractions}

