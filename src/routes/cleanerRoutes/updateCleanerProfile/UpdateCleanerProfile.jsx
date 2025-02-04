import { useState } from "react";
import "./UpdateCleanerProfile.css";


const UpdateCleanerProfile = ({ cleaner, updateCleaner }) => {
const [formData, setFormData] = useState({ ...cleaner });

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    updateCleaner(formData);
};

return (
    <div className="profile-page">
    <div className="profile-container">
        <h2 className="profile-title">Edit Profile</h2>

        {/* Profile Picture Upload */}
        <div className="profile-pic-container">
        <img
            alt="profile"
            src={formData.profilePicture || "default-profile.png"}
            className="profile-picture"
        />
        <input type="file" accept="image/*" className="profile-picture-upload" />
        </div>

        {/* Editable Profile Form */}
        <form className="profile-form" onSubmit={handleSubmit}>
        <label className="profile-label">Name</label>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="profile-input"
        />

        <label className="profile-label">Email</label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="profile-input"
        />

        <label className="profile-label">Phone</label>
        <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="profile-input"
        />

        <label className="profile-label">Service Area</label>
        <input
            type="text"
            name="serviceArea"
            value={formData.serviceArea}
            onChange={handleChange}
            className="profile-input"
        />

        <label className="profile-label">Experience Level</label>
        <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="profile-input"
        />

        <label className="profile-label">Short Bio</label>
        <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="profile-textarea"
        ></textarea>

        {/* Save Changes Button */}
        <button type="submit" className="save-profile-button">Save Changes</button>
        </form>
    </div>
    </div>
);
};

export default UpdateCleanerProfile;
