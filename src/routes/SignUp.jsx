const SignUp = () => {
    return(
        <div className="signup-page">
            <input className="email-input" placeholder="Email" />
            <input className="password-input" placeholder="Password"/>
            <button className="continue-button">Continue</button>
            <br />
            <button className="google-signup">Signup with Google</button>
            <button className="facebook-signup">Signup with Facebook</button>
        </div>
    )
}

export default SignUp;