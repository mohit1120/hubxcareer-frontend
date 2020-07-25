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
    fetch(`https://ab1232.herokuapp.com/`)
      // We get a response and receive the data in JSON format...
      .then(response => response.json())
      // ...then we update the state of our application
      .then(
        data =>{
          console.log('hey')
          this.setState({
            posts: data,
            isLoading: false,
          })}
      )
      // If we catch errors instead of a response, let's update the app
      .catch(error => this.setState({ error, isLoading: false }));
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
