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
import NewJobRequests from "./routes/cleanerRoutes/requestPages/newJobRequests/NewJobRequests"
import JobDetails from "./routes/cleanerRoutes/jobDetails/JobDetails";
import AcceptedJobRequests from "./routes/cleanerRoutes/requestPages/acceptedJobRequests/AcceptedJobRequests";
import CompletedJobRequests from "./routes/cleanerRoutes/requestPages/completedJobRequests/CompletedJobRequests";
import QuotedJobRequests from "./routes/cleanerRoutes/requestPages/quotedJobRequests/QuotedJobRequests";
function App() {
  // const [cleaner, setCleaner] = useState(cleanerProfiles.find(profile => profile.id === 1)
  // );

  // // updateCleaner function: receives updated profile data and updates the state
  // const updateCleaner = (updatedData) => {
  //   // Update the cleaner state with the new data
  //   setCleaner(updatedData);
  //   console.log("Cleaner profile updated:", updatedData);
  // };

  // Load from localStorage or use the profile with id 1 from cleanerProfiles as default
  const loadCleanerProfile = () => {
    const storedProfile = localStorage.getItem("cleanerProfile");
    return storedProfile ? JSON.parse(storedProfile) : cleanerProfiles.find(p => p.id === 1);
  };

  const [cleaner, setCleaner] = useState(loadCleanerProfile());

  // Update the cleaner and store the updated data in localStorage
  const updateCleaner = (updatedData) => {
    setCleaner(updatedData);
    localStorage.setItem("cleanerProfile", JSON.stringify(updatedData));
    console.log("Cleaner profile updated:", updatedData);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="cleanerProfile" element={<CleanerProfile cleaner={cleaner}/>} />
          <Route path="updateCleanerProfile" element={<UpdateCleanerProfile cleaner={cleaner} updateCleaner={updateCleaner} />} />
          <Route path="cleanerDashboard" element={<CleanerDashboard />} />
          <Route path="newJobRequests" element={<NewJobRequests />} />
          <Route path="quotedJobRequests" element={<QuotedJobRequests />} />
          <Route path="acceptedJobRequests" element={<AcceptedJobRequests />} />
          <Route path="completedJobRequests" element={<CompletedJobRequests />} />
          <Route path="jobDetails/:jobId" element={<JobDetails />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
