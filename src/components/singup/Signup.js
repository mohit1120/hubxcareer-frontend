import React from 'react';
import './style.css';

class Signup extends React.Component {
  state = {
   
  }
  
  
    render() {
        return (
            <div>
                <form action="" className="login-form">
                <h1>Sign up</h1>
                <div className="txtb">
                    <input type="text" placeholder="Name" />
                </div>
                <div className="txtb">
                    <input type="text" placeholder="Username" />
                </div>

                <div className="txtb">
                    <input type="text" placeholder="password" />
                </div>

                <input type="submit" className="loginbtn" value="Sign up"/>

                <div className="bottom-text">
                    Have a account? <a href="/Login">Login</a>
                </div>
                </form>
            </div>
        );
    }
}
export default Signup;
