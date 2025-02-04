import React from "react"
import { Link } from "react-router-dom"

const JobDetailsComponent = (props) => {
    const {additionalInfo, homeownerName, windowTypes, propertyType, numberOfFloors, numberOfWindows, postcode, jobDate, jobTime} = props
    return(
        <div>
            <div className="back-button-container">
                <button className="back-button">back</button>
            </div>

            <div className="homeownwer-info">
                <div className="profile-photo-container">
                    <img src=" " alt="profile"/>
                </div>
                <div className="name-location-container">
                    <label>{homeownerName}</label>
                    <label>{postcode}</label>
                </div>
            </div>

            <section className="date-time-container">
                <label>Date</label>
                <label>{jobDate}</label>
                <br />
                <label>Time</label>
                <label>{jobTime}</label>
            </section>
            <section className="property-details">
                <label>Property Details</label>
                <div>
                    <label>Property Type</label>
                    <label>{propertyType}</label>
                    <br />
                    <label>No of floors</label>
                    <label>{numberOfFloors}</label>
                    <br />
                    <label>No of windows</label>
                    <label>{numberOfWindows}</label>
                    <br />
                    <label>Window types</label>
                    <label>{windowTypes}</label>
                </div>
            </section>

            <section className="additional-info">
                <label>Additional info</label>
                <label className="short-bio">{additionalInfo}</label>
            </section>

            <section className="photos">
                <label>Photos</label>
            </section>

        </div>
    )
    
}

export default JobDetailsComponent