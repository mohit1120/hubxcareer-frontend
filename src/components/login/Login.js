import React from 'react';
import './style.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          success:false,
        };
      }
  

 
//   componentDidMount() {
//     this.fetchPosts();
//   }

//   fetchPosts() {
//     // The API where we're fetching data from
//     const a=JSON.stringify({ email: 'sushil11123411111111111@gmail.com',password:"1234" });
   
//     fetch('https://ab1232.herokuapp.com/signup',{ method:"POST",headers:{'Content-type': 'application/json',"Accept":"application/json"},body:a})
//     .then(response => response.json())
//     .then(json => console.log(json))
//   }
   

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const a=JSON.stringify({ email: username,password: password });
    fetch('https://ab1232.herokuapp.com/login',{ method:"POST",headers:{'Content-type': 'application/json',"Accept":"application/json"},body:a})
    .then(response => response.json())
    .then(json => {const {success,token,user_info}=json;
    this.setState({ success: success});
    const cookies = new Cookies();
cookies.set('token', json.token, { path: '/' });
cookies.set('loggedIn', true, { path: '/' });


    }) 
}

  
    render() {
        const {username, password } = this.state;
        return (
            <div>
                <form  onSubmit={this.onSubmit} className="login-form">
                <h1>Login</h1>
                <div className="txtb">
                    <input
                    type="text" name="username"
                    value={username} required
                    onChange={this.onChange}
                    placeholder="Username" />
                </div>

                <div className="txtb">
                    <input type="text" name="password"
                    value={password} required
                    onChange={this.onChange}
                    placeholder="password" />
                </div>

                <button type="submit" className="loginbtn">Submit</button>

                <div className="bottom-text">
                    Don't have account? <a href="/Signup">Sign up</a>
                </div>
                </form>
            </div>
        );
    }
}
export default Login;
