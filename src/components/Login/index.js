import './index.css'

const Login = () => (
    <div className="login-container">
        <div className="login-card">
            <input type="text" placeholder="USERNAME" className="input-styles" />
            <input type="password" placeholder="PASSWORD" className="input-styles" />
            <button className="login-btn">LOGIN</button>
            <p className="login-text">Don't have an account? <span className="highlighted-text">Sign Up</span></p>
        </div>
    </div>
)

export default Login
