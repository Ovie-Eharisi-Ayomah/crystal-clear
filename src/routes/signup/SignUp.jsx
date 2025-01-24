import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"; 


const SignUp = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div className="signup-page">
            <input className="email-input" placeholder="Email" />
            <input className="password-input" placeholder="Password"/>
            <button className="continue-button">Continue</button>
            <br />
            <button onClick={logGoogleUser} className="google-signup">Signup with Google</button>
            <button className="facebook-signup">Signup with Facebook</button>
        </div>
    )
}

export default SignUp; 