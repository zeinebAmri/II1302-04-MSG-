import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./quizEnd.css";
import modelInstance from "../data/QuizModel";

class Welcome extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
    this.state = {
      status: "LOADING",
      selCat: modelInstance.getSelectedCategories(),
      highscore: null,
    };
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
          selCat: modelInstance.getSelectedCategories()
        });
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      })

      modelInstance.getHighscore().then(highscore => {
        this.setState({
          highscore: highscore,
        });
      });
  }

  componentWillUnmount() {
      this.props.model.removeObserver(this);
  }

  render() {
    let question = null;
    let points = null;
    let categories = null;
    let highS = null;

    switch (this.state.status) {
      case "LOADING":
        categories = <em>Loading...</em>;
        break;
      case "LOADED":
        points = <p className="points">{localStorage.getItem("counter")}/{localStorage.getItem("numOfQuestions")} points</p>;
        let hsPoints = (localStorage.getItem("counter")/localStorage.getItem("numOfQuestions"))*100;
        if(hsPoints > this.state.highscore){
          localStorage.setItem("highscore", hsPoints);
          modelInstance.setHighscore(hsPoints);
          highS = <p className="procentP">{localStorage.getItem("highscore")} %</p>;
        }
        else if (this.state.highscore > hsPoints){
          localStorage.setItem("highscore", this.state.highscore);
          highS= <p className="procentP">{localStorage.getItem("highscore")} %</p>;
        }
        else {
          highS= <p className="procentP">{localStorage.getItem("highscore")} %</p>;
        }
        break;
    }

    return (
      <div className="quizEnd">
      <p className="headline2">Congratulations {localStorage.getItem("username")}!</p>
        <div className="divCenter">
        <div className="your-results-card">
        <p className="your-result">Your result</p>
        <div className="tv-series">
        <p className="tv-series1">{modelInstance.getQuizCategory()}</p>
        <p className="tv7-10">{localStorage.getItem("counter")}/{localStorage.getItem("numOfQuestions")}</p>
        <div className="total-points">
          <p className="total">Total</p>{points}</div>
        </div>
      </div>
      <div className="highscore-card">
        <p className="highscore">Highscore</p>
        <div className="highscoreResult">
          <p className="highS">Highest Test Score</p>
          {highS}
        </div>

        </div></div>

      <Link to="/quizStart">
        <div className="background1">
        <p className="continue" onClick = {() => {this.props.model.resetQuiz()}}>Start new quiz!</p>
        </div>
      </Link>
      </div>
    );
  }
}

export default Welcome;
