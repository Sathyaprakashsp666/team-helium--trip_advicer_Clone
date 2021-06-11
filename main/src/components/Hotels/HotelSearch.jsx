import React, { useEffect, useState } from 'react'
import axios from "axios"
import Header from './Header'
import LeftSide from './LeftSide'
import ShowHotelInfo from './ShowHotelInfo'

const HotelSearch = () => {
    const [hotel, setHotel] = useState('')
    const [hotelData, setHotelData] = useState([])

    const handleHotelSearch = async() => {
        const {data} = await axios.get('http://localhost:4500/pune')
        setHotelData(data)
    }
    useEffect(() => {
       handleHotelSearch()
    }, [])
    console.log(hotelData)
    return (
        <div>
        <Header />
        <LeftSide />
        
        {hotelData.map(item => {
            return <>
            <ShowHotelInfo  item={item}/>
            </>
        })}
        
        </div>
    )
}

export default HotelSearch

