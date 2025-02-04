import JobCardComponent from "../../../components/cleanerComponents/jobCard/JobCardComponent"
import { Link } from "react-router-dom"

const QuotedJobRequests = ({homeownerJobDetails}) => {
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
        <div>
            <Link to="/jobDetails">
            <div>
                {jobCards}
            </div>
            </Link>
        </div>
        
    )
}

export default QuotedJobRequests