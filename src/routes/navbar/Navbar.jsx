import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./Navbar.css"

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate()

  const signOutHandler = async () => {
    await signOutUser();
    navigate("/login")
  }
  return(
    <>
      <nav className='navbar'>
        <Link className="logo-container nav-link" to="/">
          <button className="logo">Logo</button>
        </Link>
        {
          currentUser ? (
            <div className="links-container">
              <Link to="/cleanerProfile" className="nav-link">
              <button className="navbar-button navbar-login-btn">Profile</button>
              </Link>
              <Link to="/cleanerSettings" className="nav-link">
              <button className="navbar-button navbar-login-btn">Settings</button>
              </Link>
              <Link className="nav-link">
              <button onClick={signOutHandler} className="navbar-button navbar-login-btn">Log Out</button>
              </Link>
            </div>
            )
            :(
              <div className="links-container">
                <Link className="login-nav-link nav-link" to="/login">
                  <button className="navbar-button navbar-login-btn">Log In</button>
                </Link>
                <Link className="signup-nav-link nav-link" to="/signup">
                  <button className="navbar-button navbar-signup-btn">Sign Up</button>
                </Link>
              </div>
              )
          }
        </nav>
      <Outlet />
    </>
  )
}

export default NavBar;
