import './login.css';
const Login = () => {
    return (
        <div className="login">
            <h1>Login Page</h1><br /><br />
            <form id="form1">
                <div>
                    <input type="email" placeholder="E-mail" required />
                </div>
                <br />
                <div>
                    <input type="password" placeholder="Password" required />
                </div>
                <br />
                <div>
                    <input type="submit" value="Login"/>
                </div>
            </form><br />
            <p>If you don't have an account <a href='/signup'>Click Here</a></p>
        </div>
    );
}
export default Login;