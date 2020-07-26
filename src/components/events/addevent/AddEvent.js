import React from 'react';
import './style.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Header from '../../../Header';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Addevent extends React.Component {
    constructor() {
        super();
        this.state = {
          id: '',
          name: '',
          description: '',
          email: '',
          success:false,
          error:'',
          submitclicked:false,
        };
      }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
if(this.state.submitclicked)
{
    alert('already submitted');
    return;
}
    e.preventDefault();
    const { id, name, description} = this.state;
    const cookies = new Cookies();
    const email=cookies.get('email');
    const token=cookies.get('token');
    const login=cookies.get('loggedIn');
    this.setState({ submitclicked: true});
    if(!email || !login || !token)
    {
        window.location.href ='/login';
    }
    
    const data=JSON.stringify({ id: id,name: name,description:description,email:email });
    fetch('https://ab1232.herokuapp.com/addevent',{ method:"POST",headers:{'Content-type': 'application/json',"Accept":"application/json"},body:data})
    .then(response => response.json())
    .then(json => {const {success,message}=json;
    this.setState({ success: success,message:message});
    if(message){
        alert(message);
    }
    window.location.href='/myevent';
    }) 
}
    render() {
        const {id, name, description } = this.state;
        return (
            <div>
                <Header/>
                {this.state.submitclicked &&  (<div style={{margin:'auto',textAlign:'center' }}> <Loader
         type="Puff"
         color="#00BFFF"
         timeout={3000} //3 secs
         text="hello"
        />
        
         </div>)
                }

              {!this.state.submitclicked  &&  <form  onSubmit={this.onSubmit} className="login-form">
                <h1>Add Event</h1>
                <div className="txtb">
                    <input
                    type="text" name="id"
                    value={id} required
                    onChange={this.onChange}
                    placeholder="Passcode" />
                </div>

                <div className="txtb">
                    <input type="text" name="name"
                    value={name} required
                    onChange={this.onChange}
                    placeholder="Event name" />
                </div>

                <div className="txtb">
                    <input type="text" name="description"
                    value={description} required
                    onChange={this.onChange}
                    placeholder="Details of event" />
                </div>
                <button type="submit" className="loginbtn">Submit</button>
                </form>
              }
            </div>
            
        );
    }
}
export default Addevent;
