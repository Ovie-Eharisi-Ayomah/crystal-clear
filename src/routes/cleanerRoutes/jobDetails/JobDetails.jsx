import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./JobDetails.css";

// Import job data arrays for all job request types
import { newJobRequests } from "../../../data/jobRequests/newJobRequests";
import { quotedJobRequests } from "../../../data/jobRequests/quotedJobRequests";
import { acceptedJobRequests } from "../../../data/jobRequests/acceptedJobRequests";
import { completedJobRequests } from "../../../data/jobRequests/completedJobRequests";

const JobDetails = () => {
  // Retrieve the jobId from URL parameters
  const { jobId } = useParams();
  const parsedJobId = parseInt(jobId);
  const navigate = useNavigate();

  // Combine all job arrays into a single list
  const allJobs = [
    ...newJobRequests,
    ...quotedJobRequests,
    ...acceptedJobRequests,
    ...completedJobRequests,
  ];

  // Find the job by id
  const job = allJobs.find((job) => job.id === parsedJobId);

  // If no matching job is found, display an error message with a back button.
  if (!job) {
    return (
      <div className="job-details-container">
        <h2>Job Not Found</h2>
        <button onClick={() => navigate(-1)} className="back-button">Back</button>
      </div>
    );
  }

  return (
    <div className="job-details-container">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button">Back</button>

      {/* Header Section */}
      <h2 className="job-details-title">
        {job.propertyType} in {job.postCode}
      </h2>
      <p className="job-details-date-time">
        <span className="job-details-icon">📅</span> {job.jobDate} &nbsp;|&nbsp;
        <span className="job-details-icon">⏰</span> {job.jobTime}
      </p>

      {/* Job Information Section */}
      <div className="job-details-info">
        <p><strong>Floors:</strong> {job.numberOfFloors}</p>
        <p><strong>Windows:</strong> {job.numberOfWindows}</p>
        <p><strong>Window Types:</strong> {job.windowTypes}</p>
      </div>

      {/* Additional Information Section */}
      {job.additionalInfo && (
        <div className="job-details-additional">
          <p><strong>Additional Info:</strong></p>
          <p>{job.additionalInfo}</p>
        </div>
      )}

      {/* Dynamic Actions Section Based on Job Status */}
      <div className="job-details-actions">
        {job.status === "new" && (
          <div className="new-job-actions">
            <input
              type="text"
              placeholder="Add a short message..."
              className="quote-message-input"
            />
            <button className="job-details-cta">Submit Quote</button>
          </div>
        )}

        {(job.status === "quoted" ||
          job.status === "accepted" ||
          job.status === "completed") && (
          <div className="quote-recap">
            <p><strong>Your Quote:</strong> {job.quote ? `$${job.quote}` : "N/A"}</p>
          </div>
        )}

        {job.status === "quoted" && (
          <button className="withdraw-quote-button">Withdraw Quote</button>
        )}

        {job.status === "accepted" && (
          <div className="accepted-job-actions">
            <button className="contact-customer-button">Contact Customer</button>
            <button className="mark-completed-button">Mark as Completed</button>
            <button className="cancel-booking-button">Cancel Booking</button>
          </div>
        )}

        {job.status === "completed" && (
          <div className="completed-job-review">
            <p><strong>Rating:</strong> {job.review ? job.review.rating : "N/A"}/5</p>
            <p><strong>Feedback:</strong> {job.review ? job.review.comment : "No review provided"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
