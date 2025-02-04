import { Link } from "react-router-dom"
import "./Login.css"

const Login = () => {
    return (
        <div className="login-page">
            <h1 className="login-title">Log In</h1>
            <form className="login-form" onSubmit={() => {}}>
                <input 
                    type='email' 
                    required 
                    className="login-input email-input" 
                    placeholder="Email" 
                    aria-label="Email"
                />

                <input 
                    type='password' 
                    required 
                    className="login-input password-input" 
                    placeholder="Password" 
                    aria-label="Password"
                />
                <Link className="login-button-link" to="/cleanerDashboard">
                <button type="submit" className="login-button">Continue</button>
                </Link>
                
            </form>
            {/* Divider Line */}
            <div className="login-divider"></div>
            <div className="social-login-section">
                <button className="login-google-btn">Log in with Google</button>
                <button className="login-facebook-btn">Log in with Facebook</button>
            </div>

            <p className="signup-link">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    )
}

export default Login
