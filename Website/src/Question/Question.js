import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import modelInstance from "../data/QuizModel";

class Question extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
    this.state = {
      status: "LOADING",
      question: null,
      questions: null,
      id: 0
    };
    this.randomizer();
    this.onPressButton = this.onPressButton.bind(this);
    this.corrAns = this.corrAns.bind(this);
    this.numberOfQuestions = localStorage.getItem("numOfQuestions");
    this.counter = 0;
  }

  randomizer(){
    var min=1;
    var max=5;
    var random = Math.floor(Math.random() * (+max - +min) + +min);
    return random;
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount() {
    modelInstance.addObserver(this);
    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance.getQuestions()
      .then(questions => {
        this.setState({
          status: "LOADED",
          questions: questions,
          question: questions[this.state.id],
        });
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      })

  }
  componentWillUnmount() {
      this.props.model.removeObserver(this);
  }

  onPressButton(){
    let temp = this.state.id;
    temp++;
    this.setState({
      id: temp,
      question: this.state.questions[temp]
    })

    document.getElementById("correctBtn").style.display ="none";
    document.getElementById("ans1").disabled = false;
    document.getElementById("ans2").disabled = false;
    document.getElementById("ans3").disabled = false;
    document.getElementById("ans4").disabled = false;
  }

  answerClick(){
    document.getElementById("correctBtn").style.display ="block";
    document.getElementById("ans1").disabled = true;
    document.getElementById("ans2").disabled = true;
    document.getElementById("ans3").disabled = true;
    document.getElementById("ans4").disabled = true;
  }

  corrAns(){
    document.getElementById("ans1").disabled = true;
    document.getElementById("ans2").disabled = true;
    document.getElementById("ans3").disabled = true;
    document.getElementById("ans4").disabled = true;
    document.getElementById("correctBtn").style.display ="block";
    this.counter = this.counter+1;
    localStorage.setItem("counter", this.counter);
  }

   escapeRegExp(str) {
      return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  decode(str){
    let find = '&#039;';
    let replace = "'";
    let find2 = "&amp;";
    let replace2 = "&";
    let find3 = "&quot;";
    let replace3 = '"';
    let find4 = "&rsquo;";
    let replace4 = "'";
    let find5 = "&shy;";
    let replace5 = "";
    let find6 = "&ldquo;";
    let replace6 = '"';
    let find7 = "&hellip;";
    let replace7 = "...";
    let find8 = "&rdquo;";
    let replace8 = '"';
    let find9 = "&oacute;";
    let replace9 = "ó";
    let find10 = "&Eacute;";
    let replace10 = "É";
    let find11 = "&Uuml;";
    let replace11 = "ü";
    let find12 = "&eacute;";
    let replace12 = "é";
    let find13 = "&ouml;";
    let replace13 = "ö";
    let find14 = "&lrm;";
    let replace14 = "";


    let t =  str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
     t =  t.replace(new RegExp(this.escapeRegExp(find2), 'g'), replace2);
     t =  t.replace(new RegExp(this.escapeRegExp(find3), 'g'), replace3);
     t =  t.replace(new RegExp(this.escapeRegExp(find4), 'g'), replace4);
     t =  t.replace(new RegExp(this.escapeRegExp(find5), 'g'), replace5);
     t =  t.replace(new RegExp(this.escapeRegExp(find6), 'g'), replace6);
     t =  t.replace(new RegExp(this.escapeRegExp(find7), 'g'), replace7);
     t =  t.replace(new RegExp(this.escapeRegExp(find8), 'g'), replace8);
     t =  t.replace(new RegExp(this.escapeRegExp(find9), 'g'), replace9);
     t =  t.replace(new RegExp(this.escapeRegExp(find10), 'g'), replace10);
     t =  t.replace(new RegExp(this.escapeRegExp(find11), 'g'), replace11);
     t =  t.replace(new RegExp(this.escapeRegExp(find12), 'g'), replace12);
     t =  t.replace(new RegExp(this.escapeRegExp(find13), 'g'), replace13);
     t =  t.replace(new RegExp(this.escapeRegExp(find14), 'g'), replace14);


     return t;
  }

  render() {
    let question = null;
    let subInfo = null;
    let answer1 = null;
    let answer2 = null;
    let answer3 = null;
    let answer4 = null;
    let noOfQuestion = null;
    let nextBtn = null;

    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned queations
    switch (this.state.status) {
      case "LOADING":
        question = <em>Loading...</em>;
        break;
      case "LOADED":
      let q = this.decode(this.state.question.question);
        question =
          <div className ="questionqq">
            <p className="questionQ">{q}</p>
          </div>;

        subInfo =
          <div className="subInfo">
            <p className="categoryDifficulty">{this.state.question.category} | {this.state.question.difficulty}</p>
          </div>;

        var random = this.randomizer();
        let corr = this.decode(this.state.question.correct_answer);
        let in0 = this.decode(this.state.question.incorrect_answers[0])
        let in1 = this.decode(this.state.question.incorrect_answers[1])
        let in2 = this.decode(this.state.question.incorrect_answers[2])

        if(random == 1) {
          answer1 =
          <div className="divAnswer" >
            <button className="alternativeButton" onClick={this.corrAns} id="ans1">
              <p id="corrAns" className="answerText">{corr}</p>
              <img className="correctBtn" id="correctBtn" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/81446106_619738728567431_2522714131534970880_n.png?_nc_cat=104&_nc_ohc=SZ44Tu2gc2wAQkg49Woj96M3uCf39v56scXC4JU45dpUjhvd_Ye156dSw&_nc_ht=scontent-arn2-1.xx&oh=018dff157e6e68085482032bba993758&oe=5E9847E4"  ></img>
            </button>
          </div>
          answer4 =
          <div className="divAnswer">
            <button className="alternativeButton" onClick={this.answerClick}  id="ans4">
              <p className="answerText">{in0}</p>
            </button>
          </div>
          answer2 =
            <div className="divAnswer">
              <button className="alternativeButton" onClick={this.answerClick}  id="ans2">
                <p className="answerText">{in1}</p>
              </button>
            </div>
          answer3 =
          <div className="divAnswer" >
            <button className="alternativeButton"onClick={this.answerClick} id="ans3">
              <p className="answerText">{in2}</p>
            </button>
          </div>
        }

        if(random == 2) {
          answer2 =
          <div className="divAnswer">
            <button className="alternativeButton" onClick={this.corrAns}  id="ans2">
              <p id="corrAns" className="answerText">{corr}</p>
              <img id="correctBtn" className="correctBtn" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/81446106_619738728567431_2522714131534970880_n.png?_nc_cat=104&_nc_ohc=SZ44Tu2gc2wAQkg49Woj96M3uCf39v56scXC4JU45dpUjhvd_Ye156dSw&_nc_ht=scontent-arn2-1.xx&oh=018dff157e6e68085482032bba993758&oe=5E9847E4"></img>
            </button>
          </div>
          answer1 =
          <div className="divAnswer" >
            <button className="alternativeButton" onClick={this.answerClick} id="ans1">
              <p className="answerText">{in0}</p>
            </button>
          </div>
          answer4 =
            <div className="divAnswer" >
              <button className="alternativeButton" onClick={this.answerClick} id="ans4">
                <p className="answerText">{in1}</p>
              </button>
            </div>
          answer3 =
          <div className="divAnswer" >
            <button className="alternativeButton" onClick={this.answerClick} id="ans3">
              <p className="answerText">{in2}</p>
            </button>
          </div>
        }

        if(random == 3) {
          answer3 =
          <div className="divAnswer">
            <button className="alternativeButton" onClick={this.corrAns}  id="ans3">
              <p id="corrAns" className="answerText">{corr}</p>
              <img id="correctBtn" className="correctBtn" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/81446106_619738728567431_2522714131534970880_n.png?_nc_cat=104&_nc_ohc=SZ44Tu2gc2wAQkg49Woj96M3uCf39v56scXC4JU45dpUjhvd_Ye156dSw&_nc_ht=scontent-arn2-1.xx&oh=018dff157e6e68085482032bba993758&oe=5E9847E4"></img>
            </button>
          </div>
          answer1 =
          <div className="divAnswer">
            <button className="alternativeButton" onClick={this.answerClick} id="ans1">
              <p className="answerText">{in0}</p>
            </button>
          </div>
          answer2 =
            <div className="divAnswer">
              <button className="alternativeButton" onClick={this.answerClick} id="ans2">
                <p className="answerText">{in1}</p>
              </button>
            </div>
          answer4 =
          <div className="divAnswer">
            <button className="alternativeButton" onClick={this.answerClick} id="ans4">
              <p className="answerText">{in2}</p>
            </button>
          </div>
        }

        if(random == 4) {
        answer4 =
        <div className="divAnswer">
          <button className="alternativeButton" onClick={this.corrAns} id="ans4">
            <p id="corrAns" className="answerText">{corr}</p>
            <img id="correctBtn" className="correctBtn" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/81446106_619738728567431_2522714131534970880_n.png?_nc_cat=104&_nc_ohc=SZ44Tu2gc2wAQkg49Woj96M3uCf39v56scXC4JU45dpUjhvd_Ye156dSw&_nc_ht=scontent-arn2-1.xx&oh=018dff157e6e68085482032bba993758&oe=5E9847E4"></img>
          </button>
        </div>
        answer1 =
        <div className="divAnswer">
          <button className="alternativeButton" onClick={this.answerClick} id="ans1">
            <p className="answerText">{in0}</p>
          </button>
        </div>
        answer2 =
          <div className="divAnswer" >
            <button className="alternativeButton" onClick={this.answerClick} id="ans2">
              <p className="answerText">{in1}</p>
            </button>
          </div>
        answer3 =
        <div className="divAnswer" >
          <button className="alternativeButton" onClick={this.answerClick} id="ans3">
            <p className="answerText">{in2}</p>
          </button>
        </div>

      }

        noOfQuestion =  <p className="questionX">Question {this.state.id+1} of {this.numberOfQuestions}</p>

        switch(this.state.id){
        case localStorage.getItem("numOfQuestions") -1:
          nextBtn =
            <Link to="/quizEnd">
              <button className="nextQuestion-button">
                <p className="next-question-text" onClick = {() => {this.props.model.resetQuiz()}}>END</p>
              </button>
            </Link>;
          break;

        default:
            nextBtn =
              <Link to="/question">
                <button className="nextQuestion-button" onClick={this.onPressButton}>
                  <p className="next-question-text">Next question</p>
                </button>
              </Link>;
          }
        break;
    }

    return (
    <div className="question">
        {noOfQuestion}
        {subInfo}
        {question}
        {answer1}
        {answer2}
        {answer3}
        {answer4}
      <div className="btncontainer">
        <Link to="/">
          <button className="save-exit-div" onClick = {() => {this.props.model.resetUser()}}>
            <p className="save-exit">Exit quiz</p>
          </button>
        </Link>
        {nextBtn}
      </div>
    </div>
    );
  }
}

export default Question;
