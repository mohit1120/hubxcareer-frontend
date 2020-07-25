import React from 'react';
import logo from './logo.svg';
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
    const requestOptions = {
      method: 'POST',
      mode: 'no-cors' ,
      headers: {
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST',
        'Access-Control-Allow-Headers':'application/json',
        "Content-type":"application/json"
      
     } ,
      body: JSON.stringify({ email: 'sushil1@gmail.com',password:"1234" })
  };
    fetch('https://ab1232.herokuapp.com/signup',requestOptions)
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
    <div className="App">
    <App1/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
