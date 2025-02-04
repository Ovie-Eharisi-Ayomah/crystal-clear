import { Link } from "react-router-dom";
import { useState } from "react";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./SignUp.css";

const defaultFormFields = {
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    return (
        <div className="signup-page">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={() => {}}>
            <input
            type="email"
            required
            className="signup-input"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={email}
            />

            <input
            type="password"
            required
            className="signup-input"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            />

            <input
            type="password"
            required
            className="signup-input"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
            />
            <Link className="signup-button-link" to="/updateCleanerProfile">
            <button type="submit" className="signup-button">
            Continue
            </button>
            </Link>
            </form>

        {/* Divider Line */}
        <div className="signup-divider"></div>

        <div className="social-signup-section">
            <button onClick={logGoogleUser} className="google-signup">
            Sign up with Google
            </button>
            <button className="facebook-signup">Sign up with Facebook</button>
        </div>
        </div>
    );
};

export default SignUp;
