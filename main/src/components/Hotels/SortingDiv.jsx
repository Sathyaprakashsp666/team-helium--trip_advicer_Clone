import React, { useState } from 'react'

const SortingDiv = (hoteldata) => {
    const data = hoteldata.hotelData
    const [optionValue, setOptionValue] = useState('')
    //console.log(optionValue)
    // for (let i = 0; i < data.length; i++) {
    //     for (let j = 0; j < data.length -i -1; j++) {
    //     }}
    
        
    return (
        <div className="sorting-div">
            <p><span>1,653 properties</span> in Pune</p>
            <div className="sorting-options">
                sort by:<select onChange={(e) => setOptionValue(e.target.value)}>
                    <option value="travel_ranked">Traveller Ranked</option>
                    <option value="lowToHigh">Price (low to high)</option>
                    <option value="highToLow">Price (high to low)</option>
                </select>
            </div>

        </div>
    )
}

export default SortingDiv
