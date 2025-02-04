import { Link } from "react-router-dom";
import "./CleanerDashboard.css";

const CleanerDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-buttons-container">
                <Link to="/newJobRequests" className="dashboard-link">
                    <button className="dashboard-button">New Job Requests</button>
                </Link>
                <Link to="/quotedJobRequests" className="dashboard-link">
                    <button className="dashboard-button">Quoted Job Requests</button>
                </Link>
                <Link to="/acceptedJobRequests" className="dashboard-link">
                    <button className="dashboard-button">Accepted Job Requests</button>
                </Link>
                <Link to="/completedJobRequests" className="dashboard-link">
                    <button className="dashboard-button">Completed Job Requests</button>
                </Link>
            </div>
        </div>
    );
};

export default CleanerDashboard;
