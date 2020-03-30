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
     window.location.replace('question');
      
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
    let input = <input  type="text" id="message" name="message"/>;
    return (
    <div>
      <div className="headline">Welcome to your message submission!</div>
      <div className="headtext1">Type a message to the door-display
      </div>
      {input}
        <button className="startBtnQuiz" onClick={() =>{this.startQuiz()}}>Submit message!</button>
        </div> 
           
         
   
    );
  
}
}

export default QuizStart;
