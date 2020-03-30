import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./quizStart.css";
import modelInstance from "../data/QuizModel";


class QuizStart extends Component {
    constructor(props){
      super(props);
      this.state = {
        selectedCategories: null,
        selectedDiff: null,
        selectedType: null,
        selectedNrOfQuestions: null,
        categoryName: null,
        highScore:null,
      }
    }

  componentDidMount(){
    this.props.model.addObserver(this);

    modelInstance.getHighscore().then(highscore => {
      this.setState({
        highscore: highscore,
      });
    });
  }

  addCategories(id){
    this.props.model.addCategory(id);
  }

  addDiff(id){
    this.props.model.addDifficulty(id);
  }

  addTy(id){
    this.props.model.addType(id);
  }

  addNrOfQuestions(id){
    this.props.model.addNumberOfQuestions(id);
  }

  startQuiz(){
    if(localStorage.getItem("categoryID") == null || localStorage.getItem("difficulty") == null
      || localStorage.getItem("type") == null || localStorage.getItem("numOfQuestions") == null){
        alert("You need to choose all the options");
      }
      else{
        window.location.replace('question');
      }
  }


  update(){
    this.setState({
      selectedCategories: localStorage.getItem("categoryID"),
      selectedDiff: localStorage.getItem("difficulty"),
      selectedType: localStorage.getItem("type"),
      selectedNrOfQuestions: localStorage.getItem("numOfQuestions"),
    })
  }

  render() {
    let hs = null;
    let chosenCat = <div className="card">{this.props.model.getQuizCategory()}</div>;
    let chosenDiff = <div className="card">{localStorage.getItem("difficulty")}</div>;
    let chosenType = <div className="card">{localStorage.getItem("type")}</div>;
    let chosenAmountOfQ = <div className="card">{localStorage.getItem("numOfQuestions")}</div>;

    if(localStorage.getItem("highscore") == null){
      hs = <p className="high-score">Personal best {this.state.highscore}%</p>
    }
    else {
      hs = <p className="high-score">Personal best {localStorage.getItem("highscore")}%</p>
    }

    return (
    <div>
      <div className="headline">Welcome to your quiz {localStorage.getItem("user")}
      {hs}
      </div>
        <div className="divider">
          <div className="options">
            <div className="category backgroundQuiz">
              <p className="quizText">Category</p>
              <div className="dropdown-content">
                <p className ="n10" id="9" name="General Knowledge" onClick={() =>{this.addCategories("9")}}>General Knowledge</p>
                <p className ="n10" id="10" onClick={() =>{this.addCategories("10")}}>Entertainment: Books</p>
                <p className ="n10" id="11" onClick={() =>{this.addCategories("11")}}>Entertainment: Film</p>
                <p className ="n10" id="12" onClick={() =>{this.addCategories("12")}}>Entertainment: Music</p>
                <p className ="n10" id="13" onClick={() =>{this.addCategories("13")}}>Entertainment: Musicals & Theatres</p>
                <p className ="n10" id="14" onClick={() =>{this.addCategories("14")}}>Entertainment: Television</p>
                <p className ="n10" id="15" onClick={() =>{this.addCategories("15")}}>Entertainment: Video Games</p>
                <p className ="n10" id="16" onClick={() =>{this.addCategories("16")}}>Entertainment: Board Games</p>
                <p className ="n10" id="17" onClick={() =>{this.addCategories("17")}}>Science & Nature</p>
                <p className ="n10" id="18" onClick={() =>{this.addCategories("18")}}>Science: Computers</p>
                <p className ="n10" id="19" onClick={() =>{this.addCategories("19")}}>Science: Mathematics</p>
                <p className ="n10" id="20" onClick={() =>{this.addCategories("20")}}>Mythology</p>
                <p className ="n10" id="21" onClick={() =>{this.addCategories("21")}}>Sports</p>
                <p className ="n10" id="22" onClick={() =>{this.addCategories("22")}}>Geography</p>
                <p className ="n10" id="23" onClick={() =>{this.addCategories("23")}}>History</p>
                <p className ="n10" id="24" onClick={() =>{this.addCategories("24")}}>Politics</p>
                <p className ="n10" id="25" onClick={() =>{this.addCategories("25")}}>Art</p>
                <p className ="n10" id="26" onClick={() =>{this.addCategories("26")}}>Celebrities</p>
                <p className ="n10" id="27" onClick={() =>{this.addCategories("27")}}>Animals</p>
                <p className ="n10" id="28" onClick={() =>{this.addCategories("28")}}>Vehicles</p>
                <p className ="n10" id="29" onClick={() =>{this.addCategories("29")}}>Entertainment: Comics</p>
                <p className ="n10" id="30" onClick={() =>{this.addCategories("30")}}>Science: Gadgets</p>
                <p className ="n10" id="31" onClick={() =>{this.addCategories("31")}}>Entertainment: Japanese Anime & Manga</p>
                <p className ="n10" id="32" onClick={() =>{this.addCategories("32")}}>Entertainment: Cartoon & Animations</p>
              <div className="dropdown-content">
            </div>
          </div>
        </div>
        <div className="difficulty backgroundQuiz">
          <p className="quizText">Difficulty</p>
            <div className="dropdown-content">
              <p className ="n10" id="easy" onClick={() =>{this.addDiff("easy")}}>Easy</p>
              <p className ="n10" id="medium" onClick={() =>{this.addDiff("medium")}}>Medium</p>
              <p className ="n10" id="hard" onClick={() =>{this.addDiff("hard")}}>Hard</p>
            <div className="dropdown-content">
            </div>
          </div>
        </div>
        <div className="type backgroundQuiz">
            <p className="quizText">Type</p>
              <div className="dropdown-content">
                <p className ="n10" id="multiple" onClick={() =>{this.addTy("multiple")}}>Multiple choice</p>
              <div className="dropdown-content">
            </div>
          </div>
        </div>
        <div className="numOfQuestions backgroundQuiz">
          <p className="quizText">Number of questions</p>
              <div className="dropdown-content">
                <p className ="n10" id="10" onClick={() =>{this.addNrOfQuestions("10")}}>10</p>
                <p className ="n10" id="20" onClick={() =>{this.addNrOfQuestions("20")}}>20</p>
                <p className ="n10" id="30" onClick={() =>{this.addNrOfQuestions("30")}}>30</p>
                <p className ="n10" id="40" onClick={() =>{this.addNrOfQuestions("40")}}>40</p>
                <p className ="n10" id="50" onClick={() =>{this.addNrOfQuestions("50")}}>50</p>
              </div>
        </div>
        <div className="startBtnQuiz" onClick={() =>{this.startQuiz()}}>Start quiz!</div>
        </div>
          <div className="categories backgroundQuiz2">
            <h4 className="quizText2">Your category</h4>{chosenCat}
          </div>
          <div className="quizSummary backgroundQuiz2">
            <h4 className="quizText2">Quiz summary</h4>
            {chosenDiff}
            {chosenType}
            {chosenAmountOfQ}
          </div>
        </div>
      </div>
    );
  }
}

export default QuizStart;
