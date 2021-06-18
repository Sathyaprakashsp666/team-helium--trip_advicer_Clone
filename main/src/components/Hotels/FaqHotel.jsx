import React from 'react'
import { Link } from 'react-router-dom'

const FaqHotel = () => {
    const faqData = [
        {
            questions: "Asked Questions about Pune hotels",
            info:"Treebo Trip Mahalaxmi Executive, Amanora The Fern, and Cocoon Hotel are some of the most popular hotels for travellers looking to stay near Dagadusheth Halwai Ganapati Temple. See the full list:",
            linkPara:"Hotels near Dagadusheth Halwai Ganapati Temple."
        },
        {
            questions:"What are the best luxury hotels in Pune?",
            info:"Popular luxury hotels in Pune include Amanora The Fern, Conrad Pune, and Marriott Suites Pune. See the full list:",
            linkPara:"Pune Luxury Hotels."
        },
        {
            questions:"Which hotels are closest to Lohegaon Airport?",
            info:"Popular hotels close to Lohegaon Airport include 7 Apple Hotel Viman Nagar, Magnus Square, and Four Points By Sheraton Hotel & Serviced Apartments, Pune. See the full list:",
            linkPara:"Hotels near (PNQ) Lohegaon Airport."
        },
        {
            questions:"What are the best resorts in Pune?",
            info:"Atmantan Wellness Resort, The Corinthians Resort & Club, and Green Gate Resort are all popular resorts for travellers staying in Pune. See the full list:",
            linkPara:"Pune Resorts."
        },
        {
            questions:"What are the best hotels near Sinhagad Fort?",
            info:"Popular hotels close to Sinhagad Fort include Hotel Cozy Inn, Treebo Trend Lotus, and Heritage View Resort. See the full list:",
            linkPara:"Hotels near Sinhagad Fort."
        },
        {
            questions:"What are the best hotels near Aga Khan Palace?",
            info:"A few of the most popular hotels near Aga Khan Palace are Sheraton Grand Pune Bund Garden Hotel, The Samrat Hotel, and Hyatt Pune. See the full list:",
            linkPara:"Hotels near Aga Khan Palace."
        },
        {
            questions:"What are the best pet-friendly hotels in Pune?",
            info:"Some of the most popular pet-friendly hotels in Pune are Marriott Suites Pune, Oakwood Residence Naylor Road Pune, and Treebo Trip Hill View Ex. See the full list:",
            linkPara:"Pet Friendly Hotels in Pune."
        },
        {
            questions:"What are the best cheap hotels in Pune?",
            info:"Popular cheap hotels in Pune include Blue Diamond - IHCL SeleQtions, Hotel Shree Panchratna, and Hotel Shreyas. See the full list:",
            linkPara:"Cheap Hotels in Pune."
        },
        {
            questions:"What are the best hotels with a spa in Pune?",
            info:"Amanora The Fern, Conrad Pune, and Lemon Tree Premier, City Center, Pune have a spa and received excellent reviews from travellers in Pune. See the full list:",
            linkPara:"Pune Spa Resorts."
        },
        {
            questions:"Which hotels in Pune are good for families?",
            info:"Amanora The Fern, Conrad Pune, and Marriott Suites Pune all received great reviews from families travelling in Pune. See the full list:",
            linkPara:"Family Hotels in Pune."
        },
        {
            questions:"What are the best romantic hotels in Pune?",
            info:"Amanora The Fern, Conrad Pune, and Marriott Suites Pune received great reviews from travellers looking for a romantic hotel in Pune. See the full list:",
            linkPara:"Romantic Hotels in Pune."
        }
    ]
    return (
        <div className="fqa-main-div">
        <h6 className="faq-title">Frequently Asked Questions about Pune hotels</h6>
        <br/>
        {faqData.map(item => {
            return <>
                <h6 className="faq-questions">{item.questions}</h6>
                <p>{item.info} <Link className="faq-question-link">{item.linkPara}</Link></p>
            </>
        })}
        
        </div>
    )
}

export default FaqHotel
