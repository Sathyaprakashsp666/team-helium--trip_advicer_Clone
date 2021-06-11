import React, { useState } from 'react'

const HotelSearch = () => {
    const [hotel, setHotel] = useState('')
    const handleHotelSearch = async() => {
        const res = await fetch('http://localhost:4500/pune')
        console.log(res)
    }
    return (
        <div>
            <input onChange={(e) => setHotel(e.target.value)} ></input>
            <button onClick={handleHotelSearch}></button>
        </div>
    )
}

export default HotelSearch

