import React from "react";
import JobCardComponent from "../../../components/cleanerComponents/jobCard/JobCardComponent";
import { completedJobRequests } from "../../../data/jobRequests/completedJobRequests";
import "../newJobRequests/NewJobRequests.css";

const CompletedJobRequests = () => {
  return (
    <div className="new-job-requests-container">
      <h2>Completed Job Requests</h2>
      <div className="job-grid">
        {completedJobRequests.map((job) => (
          // Pass the entire job object as the "job" prop.
          <JobCardComponent key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default CompletedJobRequests;
