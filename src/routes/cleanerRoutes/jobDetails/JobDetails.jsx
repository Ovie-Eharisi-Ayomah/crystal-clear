import JobDetailsComponent from "../../../components/cleanerComponents/jobDetails/JobDetailsComponent"
import QuoteComponent from "../../../components/cleanerComponents/quoteComponent/QuoteComponent"
import { homeownerJobDetails } from "../../../data/homeownerJobDetails"
const JobDetails = () => {
    const jobDetails = homeownerJobDetails.map((detail, i) => {
        return(
            <div>
                <JobDetailsComponent 
                key={i}
                homeownwerName={detail.homeownwerName}
                postcode={detail.postcode}
                propertyType={detail.propertyType}
                numberOfFloors={detail.numberOfFloors}
                numberOfWindows={detail.numberOfWindows}
                windowTypes={detail.windowTypes}
                jobDate={detail.jobDate}
                jobTime={detail.jobTime}
                additionalInfo={detail.additionalInfo}
                />
            </div>
        )
    })

    return(
        <div>
            {jobDetails}
            <QuoteComponent />
        </div>
    )

}

export default JobDetails