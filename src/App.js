import "./App.css"
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import cleanerProfiles from "../src/data/cleanerProfiles";
import HomePage from "./routes/home/HomePage"
import NavBar from "./routes/navbar/Navbar";
import SignUp from "./routes/signup/SignUp";
import Login from "./routes/login/Login";
import CleanerProfile from "./routes/cleanerRoutes/cleanerProfile/CleanerProfile";
import UpdateCleanerProfile from "./routes/cleanerRoutes/updateCleanerProfile/UpdateCleanerProfile";
import CleanerDashboard from "./routes/cleanerRoutes/cleanerDashboard/CleanerDashboard";
import NewJobRequests from "./routes/cleanerRoutes/newJobRequests/NewJobRequests"
import JobDetails from "./routes/cleanerRoutes/jobDetails/JobDetails";
import { homeownerJobDetails } from "./data/homeownerJobDetails"
function App() {
  const [cleaner, setCleaner] = useState(cleanerProfiles.find(profile => profile.id === 1)
  );

  // updateCleaner function: receives updated profile data and updates the state
  const updateCleaner = (updatedData) => {
    // Update the cleaner state with the new data
    setCleaner(updatedData);
    console.log("Cleaner profile updated:", updatedData);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="cleanerProfile" element={<CleanerProfile />} />
          <Route path="updateCleanerProfile" element={<UpdateCleanerProfile cleaner={cleaner} updateCleaner={updateCleaner} />} />
          <Route path="cleanerDashboard" element={<CleanerDashboard />} />
          <Route path="newJobRequests" element={<NewJobRequests homeownerJobDetails={homeownerJobDetails}/>} />
          <Route path="quotedJobRequests" element={<NewJobRequests homeownerJobDetails={homeownerJobDetails}/>} />
          <Route path="acceptedJobRequests" element={<NewJobRequests homeownerJobDetails={homeownerJobDetails}/>} />
          <Route path="completedJobRequests" element={<NewJobRequests homeownerJobDetails={homeownerJobDetails}/>} />
          <Route path="jobDetails" element={<JobDetails homeownerJobDetails={homeownerJobDetails}/>} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
