const Login = () => {
    return(
        <div className="login-page">
            <div>
                <div>
                    <input placeholder="Email" />
                    <input placeholder="Password"/>
                    <button>Continue</button>
                    <br />
                    <button>Log in with Google</button>
                    <button>Log in with Facebook</button>
                </div>
            </div>
        </div>
    )
}

export default Login