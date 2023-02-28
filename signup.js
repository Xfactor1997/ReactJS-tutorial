import './signup.css';
const SignUp = () => {
    return (
        <div className="signup">
            <h1>SignUp Page</h1><br /><br/>
            <form id="form2">
                <div>
                    <input type="text" placeholder="User Name" required />
                </div><br />
                <div>
                    <input type="text" placeholder="Phone Number" required />
                </div><br />
                <div>
                    <input type="email" placeholder="E-mail" required />
                </div><br />
                <div>
                    <input type="password" placeholder="Password" required />
                </div><br />
                <div>
                    <input type="date" placeholder="Birthday" required />
                </div><br />
                <div>
                    <label>Gender:</label>&nbsp;&nbsp;
                    <label>
                        <input type="radio" name='gender'/>Male
                    </label>
                    <label>
                        <input type="radio" name='gender'/>Female
                    </label>
                </div><br/>
                <div>
                    <label>Picture upload:</label>&nbsp;&nbsp;
                    <input type="file"  required />
                </div><br />
                <div>
                    <input type="submit" value="Sign Up"/>
                </div>
            </form><br />
            <p>If you do have an account <a href='/login'>Click Here</a></p>
            <button type="button" class="btn btn-danger" id="btn_scroll_top"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></button>
        </div>
        
    );
}
export default SignUp;