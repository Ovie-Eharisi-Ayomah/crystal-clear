import { Link, Outlet } from "react-router-dom";
import "./Navbar.css"

const NavBar = () => {
    return(
        <>
            <nav className='navbar'>
                <Link className="logo-container nav-link" to="/">
                    <button className="logo">Logo</button>
                </Link>
                
                <div className="links-container">
                    <Link className="login-nav-link nav-link" to="/login">
                        <button className="navbar-button navbar-login-btn">Log In</button>
                    </Link>
                    <Link className="signup-nav-link nav-link" to="/signup">
                        <button className="navbar-button navbar-signup-btn">Sign Up</button>
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;
