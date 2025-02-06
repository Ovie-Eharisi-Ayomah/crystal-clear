import React from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";
import { newJobRequests } from "../../../data/jobRequests/newJobRequests";

const JobDetails = () => {
  // Extract the jobId parameter from the URL
  const { jobId } = useParams();
  console.log("jobId from URL:", jobId);
  console.log("Parsed jobId:", parseInt(jobId));
  console.log("Job data:", newJobRequests);
  // Find the job that matches the jobId (assuming jobId is a number)
  const job = newJobRequests.find((job) => job.id === parseInt(jobId));


  // If no job is found, display a "not found" message
  if (!job) {
    return (
      <div className="job-details-container">
        <h2>Job Not Found</h2>
      </div>
    );
  }

  return (
    <div className="job-details-container">
      <h2 className="job-details-title">
        {job.propertyType} in {job.postCode}
      </h2>
      <p className="job-details-date-time">
        📅 {job.jobDate} | ⏰ {job.jobTime}
      </p>

      <div className="job-details-info">
        <p>
          <strong>Floors:</strong> {job.numberOfFloors}
        </p>
        <p>
          <strong>Windows:</strong> {job.numberOfWindows}
        </p>
        <p>
          <strong>Window Types:</strong> {job.windowTypes}
        </p>
      </div>

      {job.additionalInfo && (
        <div className="job-details-additional">
          <p>
            <strong>Additional Info:</strong>
          </p>
          <p>{job.additionalInfo}</p>
        </div>
      )}

      <div className="job-details-actions">
        {/* Example Call-to-Action Button */}
        <button className="job-details-cta">Submit Quote</button>
      </div>
    </div>
  );
};

export default JobDetails;
