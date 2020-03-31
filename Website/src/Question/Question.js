import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import modelInstance from "../data/QuizModel";


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
    userInput: null,
    message: null,
    
  };
}

  render() {

    

    return (
    <div className="question">Your submission was successful!
    <div className="question1">The text that will be sumbmitted is: 
    <div className="question2">{this.state.message}</div>
    </div></div>
    );
  }
}

export default Question;
