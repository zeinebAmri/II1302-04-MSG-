import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./quizes.css";

class Quizes extends Component {
  render() {
    return (
      <div className="quizes">
        <p className="questionX">Question 1 of 50</p>
        <p className="categoryDifficulty">Sports | Hard</p>
        <p className="questionQ">Question...?</p>


        <div className="divAnswer">
          <p className="answerText">Answer 1</p>
        </div>

        <div className="divAnswer">
          <p className="answerText">Answer 2</p>
        </div>

        <div className="divAnswer">
          <p className="answerText">Answer 3</p>
          <img className="correctBtn" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/81446106_619738728567431_2522714131534970880_n.png?_nc_cat=104&_nc_ohc=SZ44Tu2gc2wAQkg49Woj96M3uCf39v56scXC4JU45dpUjhvd_Ye156dSw&_nc_ht=scontent-arn2-1.xx&oh=018dff157e6e68085482032bba993758&oe=5E9847E4"></img>
        </div>

        <div className="divAnswer">
          <p className="answerText">Answer 4</p>
        </div>

        <div className="btncontainer">

        <button className="save-exit-div">
          <p className="save-exit">Save & exit</p>
        </button>
        <button className="nextQuestion-button">
          <p className="next-question-text">Next question</p>
        </button>
        </div>


      </div>
    );
  }
}

export default Quizes;
