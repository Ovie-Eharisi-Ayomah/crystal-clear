import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import "./Login.css"
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";


const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  // Initialize the navigate hook from React Router
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // Redirect to the Cleaner Dashboard after successful Google sign-in
    navigate("/cleanerDashboard");
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email, 
        password
      );
      resetFormFields()
      // Redirect to the Cleaner Dashboard after successful login
      navigate("/cleanerDashboard");
    } catch(error) {
      console.error(error)
      if(error.code === 'auth/invalid-credential'){
        alert("This user does not exist in our system")
      }
    }
  }
  

  return (
    <div className="login-page">
      <h1 className="login-title">Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
        type="email"
        required
        className="login-input"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={email}
        />

        <input
        type="password"
        required
        className="login-input"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={password}
        />
        {/* <Link className="login-button-link" to="/cleanerDashboard"> */}
        <button type="submit" className="login-button">Continue</button>
        {/* </Link> */}
        
      </form>
      {/* Divider Line */}
      <div className="login-divider"></div>
      <div className="social-login-section">
        <button onClick={signInWithGoogle} className="login-google-btn">Log in with Google</button>
        <button className="login-facebook-btn">Log in with Facebook</button>
      </div>

      <p className="signup-link">Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  )
}

export default Login
