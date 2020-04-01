import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
//import modelInstance from "../data/QuizModel";
import modelInstance from "../QuizStart/quizStart";
import QuizStart from "../QuizStart/quizStart";


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
    message: null,
    
  };
}

  render() {

    let message = document.querySelector(QuizStart.userInput);

    return (
    <div className="question">Your submission was successful!
    <div className="question1">The text that will be sumbmitted is: 
    <div className="question2">{message}
    </div></div></div>
    );
  }
}

export default Question;
