import React from "react";
import JobCardComponent from "../../../components/cleanerComponents/jobCard/JobCardComponent";
import { quotedJobRequests } from "../../../data/jobRequests/quotedJobRequests";
import "../newJobRequests/NewJobRequests.css";

const QuotedJobRequests = () => {
  return (
    <div className="new-job-requests-container">
      <h2>Quoted Job Requests</h2>
      <div className="job-grid">
        {quotedJobRequests.map((job) => (
          // Pass the entire job object as the "job" prop.
          <JobCardComponent key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default QuotedJobRequests;
