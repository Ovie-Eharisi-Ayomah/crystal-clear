import React from "react";
import JobCardComponent from "../../../components/cleanerComponents/jobCard/JobCardComponent";
import { acceptedJobRequests } from "../../../data/jobRequests/acceptedJobRequests";
import "../newJobRequests/NewJobRequests.css";
const AcceptedJobRequests = () => {
  return (
    <div className="new-job-requests-container">
      <h2>Accepted Job Requests</h2>
      <div className="job-grid">
        {acceptedJobRequests.map((job) => (
          // Pass the entire job object as the "job" prop.
          <JobCardComponent key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AcceptedJobRequests;
