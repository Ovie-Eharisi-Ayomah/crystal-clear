import { Link } from "react-router-dom";
import "./JobCardComponent.css";

const JobCardComponent = ({ postcode, propertyType, numberOfFloors, numberOfWindows, jobDate, jobTime }) => {
    // const  = props
    return (
        <Link to={`/jobDetails`} className="job-card-link">
        <div className="job-card">
            {/* Job Summary */}
            <div className="job-card-header">
            <h3 className="job-card-title">{propertyType} in {postcode}</h3>
            <p className="job-card-date">📅 {jobDate} | ⏰ {jobTime}</p>
            </div>

            {/* Job Info */}
            <div className="job-card-info">
            <p>🏠 <strong>Floors:</strong> {numberOfFloors}</p>
            <p>🪟 <strong>Windows:</strong> {numberOfWindows}</p>
            </div>

            {/* CTA */}
            <div className="job-card-footer">
            <p className="job-card-details-text">View details →</p>
            </div>
        </div>
        </Link>
    );
};

export default JobCardComponent;
