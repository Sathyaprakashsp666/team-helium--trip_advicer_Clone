import React from 'react'
import axios from 'axios'


function AbhuDhabi(){
    const [data,setData] = React.useState([])

    React.useEffect(()=>{
        // This is placed inside 
        axios.get("http://localhost:3000/popular_things_todo")
        .then(res => {
            console.log(res);
            const value = res.data.data
          
          setData(value);
        })
        .catch(error=>console.log(error))
    },[])
    console.log(setData);
    return (
        <div>
            {/* {data.map((item) => {return(
                <div>
                    {item}
                </div>
            )})} */}
        </div>
    )
}
export {AbhuDhabi}