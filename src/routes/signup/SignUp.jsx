import { Link } from "react-router-dom";
import { useState } from "react";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./SignUp.css";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email, 
        password
      );

      console.log(user);
      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields()
    } catch(error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user, email already in use');
      }
      console.error('user creation encountered an error: ', error)
    }
  }
  
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
    <form className="signup-form" onSubmit={handleSubmit}>
    <input
      type="text"
      required
      className="signup-input"
      placeholder="Full Name"
      name="displayName"
      onChange={handleChange}
      value={displayName}
      />

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
      {/* <Link className="signup-button-link" to="/updateCleanerProfile"> */}
      <button type="submit" className="signup-button">
      Continue
      </button>
      {/* </Link> */}
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
