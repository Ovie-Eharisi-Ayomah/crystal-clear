import React from "react";
import { Link } from "react-router-dom";
import "./JobCardComponent.css";

const JobCardComponent = ({ job }) => {
  const { id, postCode, propertyType, numberOfFloors, numberOfWindows, jobDate, jobTime } = job;
  
  return (
    <Link to={`/jobDetails/${id}`} className="job-card-link">
      <div className="job-card">
        <div className="job-card-header">
          <h3 className="job-card-title">{propertyType} in {postCode}</h3>
          <p className="job-card-date">📅 {jobDate} | ⏰ {jobTime}</p>
        </div>
        <div className="job-card-info">
          <p>🏠 <strong>Floors:</strong> {numberOfFloors}</p>
          <p>🪟 <strong>Windows:</strong> {numberOfWindows}</p>
        </div>
        <div className="job-card-footer">
          <p className="job-card-details-text">View details →</p>
        </div>
      </div>
    </Link>
  );
};

export default JobCardComponent;
