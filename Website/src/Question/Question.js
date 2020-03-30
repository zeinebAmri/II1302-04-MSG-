import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import modelInstance from "../data/QuizModel";

class Question extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {

    return (
    <div className="question">Your submission was successful!
    <div className="question1">The message submitted to the door-display is...</div>
    </div>
    );
  }
}

export default Question;
