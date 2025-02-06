import { Link } from "react-router-dom";
import "./CleanerDashboard.css";

// Define an array of button configurations
const dashboardButtons = [
  { route: "/newJobRequests", label: "New Job Requests" },
  { route: "/quotedJobRequests", label: "Quoted Job Requests" },
  { route: "/acceptedJobRequests", label: "Accepted Job Requests" },
  { route: "/completedJobRequests", label: "Completed Job Requests" },
];

const CleanerDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-buttons-container">
        {dashboardButtons.map((btn) => (
          <Link key={btn.route} to={btn.route} className="dashboard-link">
            {/* Instead of nesting a <button> inside a <Link>, we style the Link directly */}
            <div
              className="dashboard-button"
              role="button"
              tabIndex="0"
              aria-label={btn.label}
            >
              {btn.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CleanerDashboard;
