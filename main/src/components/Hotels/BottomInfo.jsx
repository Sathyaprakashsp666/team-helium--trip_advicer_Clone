import React from 'react'
import { Link } from 'react-router-dom'

const BottomInfo = () => {
    return (
        <div className="bottom-info-div">

            <div className="bottom-div-information">
                <img src="https://stmaaprodfwsite.blob.core.windows.net/assets/sites/9/2019/12/5a230db7e6b9d5.2438375915122467119451-300x300.png" alt="info_logo" />
                <h3 className="bottom-info-div-text">Consider a holiday rental and get more space and privacy</h3>
                <Link className="link-information">View all 56 Pune holiday rentals</Link>
            </div>
            <div className="bottom-div-grid-images">
                <div className="bottom-div-grid-images-1">
                    <p className="grid-div-price">₹ 1,906<span className="grid-div-text">+/night</span></p>
                    <div className="link-div-info">
                        <Link className="link-div-text">1 Bedroom, sleeps 2</Link>
                    </div>
                </div>
                <div className="bottom-div-grid-images-2">
                    <p className="grid-div-price">₹ 1,906<span className="grid-div-text">+/night</span></p>
                    <div className="link-div-info">
                    <Link className="link-div-text">1 Bedroom, sleeps 2</Link>
                    </div>
                </div>
                <div className="bottom-div-grid-images-3">
                    <p className="grid-div-price">₹ 12,606<span className="grid-div-text">+/night</span></p>
                    <div className="link-div-info">
                    <Link className="link-div-text">1 Bedroom, sleeps 4</Link>
                    </div>
                </div>
                <div className="bottom-div-grid-images-4">
                    <p className="grid-div-price">₹ 1,906<span className="grid-div-text">+/night</span></p>
                    <div className="link-div-info">
                    <Link className="link-div-text">1 Bedroom, sleeps 50</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BottomInfo
