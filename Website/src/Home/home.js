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
    
        window.location.replace('quizStart');
     
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
   
    return (
    <div className="home">
      <p className="headline1">Welcome to your door-display application!</p>
        <div className="subhead">
          <p className="sub-headline">Time to update your display!</p>
          <img src = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/82016103_474697166522483_8931529490127912960_n.png?_nc_cat=103&_nc_ohc=mR3u3X27U60AQncefPz6-5C5krXMCBhRqwTTWZD4HRdAX1mhw9-DZDkFA&_nc_ht=scontent-arn2-1.xx&oh=e9d2ff7ae0e583b3c96694c04447b849&oe=5E9873E3" className = "bild4"></img>
      </div>
      <div className ="divbtn">
        <button className="signUp" onClick={this.newUser}>Submit message</button>
      </div>
      <div className="picDiv">
        <img src = "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=austin-distel-Imc-IoZDMXc-unsplash.jpg" className = "bild marginRight"></img>
        <img src = "https://images.unsplash.com/photo-1522968941782-e27ac665baa3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mikhail-derecha-q-XTB-YTsho-unsplash.jpg" className = "bild marginRight"></img>
        <img src = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=toa-heftiba-FV3GConVSss-unsplash.jpg" className = "bild"></img>
      </div>
    </div>
    );
  }
}

export default Home;

/* login till existing user och sign up till new user --> länka start quiz vill angiven mail */
