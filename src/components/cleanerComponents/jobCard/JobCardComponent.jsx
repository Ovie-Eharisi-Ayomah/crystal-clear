import { Link } from "react-router-dom";
import "./JobCardComponent.css";

const JobCardComponent = ({ job }) => {
  // Destructure the job properties from the job object.
  // Ensure that the job object contains a unique id for navigation.
  const { id, postcode, propertyType, numberOfFloors, numberOfWindows, jobDate, jobTime } = job;

  return (
    <Link to={`/jobDetails/${id}`} className="job-card-link">
      <div className="job-card">
        {/* Job Summary Section */}
        <div className="job-card-header">
          <h3 className="job-card-title">{propertyType} in {postcode}</h3>
          <p className="job-card-date">📅 {jobDate} | ⏰ {jobTime}</p>
        </div>

        {/* Job Information Section */}
        <div className="job-card-info">
          <p>🏠 <strong>Floors:</strong> {numberOfFloors}</p>
          <p>🪟 <strong>Windows:</strong> {numberOfWindows}</p>
        </div>

        {/* Call-to-Action Section */}
        <div className="job-card-footer">
          <p className="job-card-details-text">View details →</p>
        </div>
      </div>
    </Link>
  );
};

export default JobCardComponent;
