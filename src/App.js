import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/singup/Signup';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
class App1 extends React.Component {
  state = {
    isLoading: true,
    posts: [],
    error: null
  }
  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    // The API where we're fetching data from
    const a=JSON.stringify({ email: 'sushil11123411111111111@gmail.com',password:"1234" });
   
    fetch('https://ab1232.herokuapp.com/signup',{ method:"POST",headers:{'Content-type': 'application/json',"Accept":"application/json"},body:a})
    .then(response => response.json())
    .then(json => console.log(json))
  }
  
  render() {
    return (
    <React.Fragment>
      <div>{JSON.stringify(this.state.posts)}</div>
    </React.Fragment>)
  }
}
function App() {
  return (
    // <div className="App">
    // <App1/>
    //  <Signup/>
    //  <Login/> 
    //  <Dashboard/>
    // </div>
    <Router>
      <Switch>
        {/* <Route path="/Login" exact={true} Component={Login}></Rouy
      te> */}
        {/* <Signup/> */}
        <Login/>
      </Switch>
    </Router>  
    );
}

export default App;
