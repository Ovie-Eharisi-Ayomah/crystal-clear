import JobCardComponent from "../../../components/cleanerComponents/jobCard/JobCardComponent"
import { Link } from "react-router-dom"
import "./NewJobRequests.css";

const NewJobRequests = ({homeownerJobDetails}) => {
    const jobCards = homeownerJobDetails.map((detail, i) => {
        return(
            <JobCardComponent 
            key={i}
            name={detail.homeownwerName}
            postcode={detail.postcode}
            propertyType={detail.propertyType}
            numberOfFloors={detail.numberOfFloors}
            numberOfWindows={detail.numberOfWindows}
            jobDate={detail.jobDate}
            jobTime={detail.jobTime}
            />

        )
    })
    return(
        <div className="new-job-requests-container">
            {/* <h2>New Job Requests</h2> */}
            <Link to="/jobDetails">
            <div className="job-grid">
                {jobCards}
            </div>
            </Link>
        </div>
        
    )
}

export default NewJobRequests