import React from "react";
import { Link } from "react-router-dom";
import JobCardComponent from "../../../../components/cleanerComponents/jobCard/JobCardComponent";
import { newJobRequests } from "../../../../data/jobRequests/newJobRequests";
import "../jobRequests.css";

const NewJobRequests = () => {
  return (
    <div className="requests-container">
      <div className="header">
        <Link to="/cleanerDashboard" className="back-button-link">
          <button className="back-button">Back</button>
        </Link>
        <h2 className="page-title">New Job Requests</h2>
      </div>
      <div className="job-grid">
        {newJobRequests.map((job) => (
          <JobCardComponent key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default NewJobRequests;
