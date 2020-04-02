import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Message.css";

class Message extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: null,
      message: null,
    };
  }

  newPage(){
    let userInput = document.getElementById('message').value;
    console.log(userInput);
    window.location.replace('confirm');
  }

  render() {
    return (
      <div>
        <div className="headline">Welcome to your message submission!</div>
        <div className="headtext1">Type a message to the door-display</div>
        <input type="text" id="message" name="message" placeholder="Enter message..."/>
        <Link to="/question"><button className="submitBtn" onClick={() =>{this.newPage()}}>Submit message!</button></Link>
      </div>
    );
  }
}

export default Message;
