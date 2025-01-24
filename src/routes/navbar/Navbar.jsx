import { Link, Outlet } from "react-router-dom";
const NavBar = () => {
    return(
        <>
            <nav className='navbar'>
            
                <Link className="logo-container" to="/" >
                    <button className="logo">Logo</button>
                </Link>
                <div className="links-container">
                    {/* <button className="profile">Profile</button> */}
                    <Link className="login-nav-link" to="/login">
                        <button className="login-button">Log In</button>
                    </Link>
                    <Link className="signup-nav-link" to="/signup">
                        <button className="signup-button">Sign Up</button>
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>
        
    )
}

export default NavBar;