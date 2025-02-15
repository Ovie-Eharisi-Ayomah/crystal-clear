import React from "react";
import { Link } from "react-router-dom";
import JobCardComponent from "../../../../components/cleanerComponents/jobCard/JobCardComponent";
import { completedJobRequests } from "../../../../data/jobRequests/completedJobRequests";
import "../jobRequests.css";

const CompletedJobRequests = () => {
  return (
    <div className="requests-container">
      <div className="header">
        <Link to="/cleanerDashboard" className="back-button-link">
          <button className="back-button">Back</button>
        </Link>
        <h2 className="page-title">Completed Job Requests</h2>
      </div>
      <div className="job-grid">
        {completedJobRequests.map((job) => (
          <JobCardComponent key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default CompletedJobRequests;
