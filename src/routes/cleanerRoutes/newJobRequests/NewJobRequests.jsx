import React from "react";
import JobCardComponent from "../../../components/cleanerComponents/jobCard/JobCardComponent";
import { newJobRequests } from "../../../data/jobRequests/newJobRequests";
import "./NewJobRequests.css";

const NewJobRequests = () => {
  return (
    <div className="new-job-requests-container">
      <h2>New Job Requests</h2>
      <div className="job-grid">
        {newJobRequests.map((job) => (
          // Pass the entire job object as the "job" prop.
          <JobCardComponent key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default NewJobRequests;
