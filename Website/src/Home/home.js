import React, { Component } from "react";
import { Link } from "react-router-dom";
import App from "../App";
import "./home.css";
import modelInstance from "../data/QuizModel";

class Home extends Component {
  constructor(){
    super();
    this.user = "";
    modelInstance.resetUser();
  }

  componentDidMount(){
    modelInstance.addObserver(this);
  }

  newUser() {
    modelInstance.signUp(localStorage.getItem("user"))
    .then(result =>{
      if(result == true){
        window.location.replace('quizStart');
      }
      else {
        alert("Please try again")
      }
    });
  }

  existingUser(){
    modelInstance.logIn(localStorage.getItem("user"))
    .then(result =>{
      if(result == true){
        window.location.replace('quizStart');
      }
      else {
        alert("Please try again")
      }
    });
  }

  onChange = event => {
    this.user = event.target.value;
    localStorage.setItem("user", event.target.value);
  }

  update(){
    this.render();
  }

  render() {
    let input = <input  name="username" type="text" onChange={this.onChange} placeholder="Enter your email" id="input"/>;
    return (
    <div className="home">
      <p className="headline1">Play your way to knowledge</p>
        <div className="subhead">
          <p className="sub-headline">and make your tree grow!</p>
          <img src = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/82016103_474697166522483_8931529490127912960_n.png?_nc_cat=103&_nc_ohc=mR3u3X27U60AQncefPz6-5C5krXMCBhRqwTTWZD4HRdAX1mhw9-DZDkFA&_nc_ht=scontent-arn2-1.xx&oh=e9d2ff7ae0e583b3c96694c04447b849&oe=5E9873E3" className = "bild4"></img>
      </div>{input}
      <div className ="divbtn">
        <button className="logIn" onClick={this.existingUser}>Log In</button>
        <button className="signUp" onClick={this.newUser}>Sign Up</button>
      </div>
      <div className="picDiv">
        <img src = "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=austin-distel-Imc-IoZDMXc-unsplash.jpg" className = "bild marginRight"></img>
        <img src = "https://images.unsplash.com/photo-1471873814584-2120e5ec0211?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=chuttersnap-JhHde49eB0w-unsplash.jpg" className = "bild marginRight"></img>
        <img src = "https://images.unsplash.com/photo-1546074177-bda3f3e3be1f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=sincerely-media-8d6Qx7X0aAw-unsplash.jpg" className = "bild"></img>
      </div>
    </div>
    );
  }
}

export default Home;

/* login till existing user och sign up till new user --> länka start quiz vill angiven mail */
