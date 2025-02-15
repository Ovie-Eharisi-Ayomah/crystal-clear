import React from "react";
import { Link } from "react-router-dom";
import JobCardComponent from "../../../../components/cleanerComponents/jobCard/JobCardComponent";
import { acceptedJobRequests } from "../../../../data/jobRequests/acceptedJobRequests";
import "../jobRequests.css";

const AcceptedJobRequests = () => {
  return (
    <div className="requests-container">
      <div className="header">
        <Link to="/cleanerDashboard" className="back-button-link">
          <button className="back-button">Back</button>
        </Link>
        <h2 className="page-title">Accepted Job Requests</h2>
      </div>
      <div className="job-grid">
        {acceptedJobRequests.map((job) => (
          <JobCardComponent key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AcceptedJobRequests;
