import { Link } from "react-router-dom";
import { useState } from "react";
import "./CleanerProfile.css";

const CleanerProfile = ({cleaner}) => {

return (
  <div className="profile-page">
  <div className="profile-container">
    <h2 className="profile-title">Cleaner Profile</h2>

    {/* Profile Picture */}
    <div className="profile-pic-container">
    <img
        alt="profile"
        src={cleaner.profilePicture || "default-profile.png"}
        className="profile-picture"
    />
    </div>

    {/* Profile Info */}
    <div className="profile-info">
    <p><strong>Name:</strong> {cleaner.name}</p>
    <p><strong>Email:</strong> {cleaner.email}</p>
    <p><strong>Phone:</strong> {cleaner.phone}</p>
    <p><strong>Service Area:</strong> {cleaner.serviceArea}</p>
    <p><strong>Experience Level:</strong> {cleaner.experience}</p>
    <p><strong>Bio:</strong> {cleaner.bio}</p>
    </div>

    {/* Edit Profile Button */}
    <Link to="/updateCleanerProfile">
    <button className="edit-profile-button">Edit Profile</button>
    </Link>
  </div>
  </div>
);
};

export default CleanerProfile;
