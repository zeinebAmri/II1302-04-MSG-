import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home/home";
import modelInstance from "./data/QuizModel";
import "./App.css";
import QuizEnd from "./QuizEnd/quizEnd";
import Question from "./Question/Question";
import QuizStart from "./QuizStart/quizStart";
import AboutUs from "./AboutUs/aboutUs";
import { Link } from "react-router-dom";
import Contact from "./Contact/contact";


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "MSG DLR",
      username:null,
    };
    modelInstance.databaseInistalize();
    modelInstance.populateArray();
  }

  render() {

    return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Link to="/">
            <img className="logo" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/81941738_2827638963959351_4037664515490316288_n.png?_nc_cat=101&_nc_ohc=4Yoloc1KL7AAQn8QiWSudnHK6PVBmxNlGmSQ1jATv10lnAXW2PKkdNAfw&_nc_ht=scontent-arn2-1.xx&oh=816d7dfdfee239d2e75f275ac53617ef&oe=5EAFE9FC"></img>
            <p className="ajli" onClick={() =>{modelInstance.resetUser()}}>{this.state.title}</p>
          </Link>
          <Link to="/contact">
            <p className="contact">Contact</p>
          </Link>
          <Link to="/aboutus">
            <p className="about-us">About us</p>
          </Link>
          <Link to="/">
            <p className="homeText" onClick = {() => {modelInstance.resetUser()}}>Home</p>
          </Link>

        </div>
          {/* We rended diffrent component based on the path */}
      <Route exact path="/" component={Home} />

      <Route
        path="/quizes"
        render={() => <QuizStart model={modelInstance} />}
      />
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/contact" component={Contact}/>

      <Route
        path="/question"
        render={() => <Question model={modelInstance} />}
      />

      <Route
        path="/quizend"
        render={() => <QuizEnd model={modelInstance} />}
      />

      <Route
        path="/quizStart"
        render={() => <QuizStart model={modelInstance} />}
      />


      <Route
        path="/search"
        render={() => <AboutUs model={modelInstance} />}
      />
      </header>
    </div>
    );
  }
}
export default App;
