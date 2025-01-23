import "./App.css"
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage"
import NavBar from "./routes/Navbar";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";

function App() {




  // const UpdateCleanerProfile = () => {
  //   return(
  //     <div className="profile-page">
  //       <NavBar />
  //       <div className="page-content">
  //         <div className="name">
  //           <input type="text" placeholder="Name" />
  //         </div>
  //         <div className="image-forms">
  //           <div className="profile-pic">
  //             <img alt="profile" src="" className="profile-picture" />
  //           </div>
  //           <div className="forms">
  //             <input placeholder="Email" />
  //             <input placeholder="Phone" />
  //             <input placeholder="Service Area" />
  //             <input placeholder="Experience Level" />
  //           </div>
  //         </div>
  //         <div>
  //           <input placeholder="Short Bio" />
  //         </div>
  //         <div>
  //           <button>Submit</button>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  // const CleanerProfile = () => {
  //   return(
  //     <div className="profile-page">
  //       <NavBar />
  //       <div className="page-content">
  //         <div className="name">
  //           <input type="text" placeholder="Name" />
  //         </div>
  //         <div className="image-forms">
  //           <div className="profile-pic">
  //             <img alt="profile" src="" className="profile-picture" />
  //           </div>
  //           <div className="forms">
  //             <input placeholder="Email" />
  //             <input placeholder="Phone" />
  //             <input placeholder="Service Area" />
  //             <input placeholder="Experience Level" />
  //           </div>
  //         </div>
  //         <div>
  //           <input placeholder="Short Bio" />
  //         </div>
  //         <div>
  //           <button>Edit</button>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  // const CleanerDashboard = () => {
  //   return(
  //     <div>
  //       <NavBar />
  //       <div>
  //         <button>New Job Requests</button>
  //         <button>Pending Quotes</button>
  //         <button>Accepted Jobs</button>
  //         <button>Completed Jobs</button>
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
