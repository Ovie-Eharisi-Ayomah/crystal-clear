import React from "react";
import { Link } from "react-router-dom";
import JobCardComponent from "../../../../components/cleanerComponents/jobCard/JobCardComponent";
import { quotedJobRequests } from "../../../../data/jobRequests/quotedJobRequests";
import "../jobRequests.css";

const QuotedJobRequests = () => {
  return (
    <div className="requests-container">
      <div className="header">
        <Link to="/cleanerDashboard" className="back-button-link">
          <button className="back-button">Back</button>
        </Link>
        <h2 className="page-title">Quoted Job Requests</h2>
      </div>
      <div className="job-grid">
        {quotedJobRequests.map((job) => (
          <JobCardComponent key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default QuotedJobRequests;
