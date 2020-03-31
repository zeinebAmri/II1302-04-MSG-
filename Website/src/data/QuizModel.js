import ObservableModel from "./ObservableModel";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const API_URL = "https://opentdb.com";

class QuizModel extends ObservableModel {
  constructor() {
    super();
    this.quiz = [];
    this.currentQuestion = null;
    this.selectedCategories = null; //[]
    this.selectedDiff = null;
    this.selectedType = null;
    this.selectedNrOfQuestions = null;
    this.categoryList = [];

    this.username = null;
    this.userID = null;
    this.highScore = null;
  }

  databaseInistalize(){
    const config = {
      apiKey: "AIzaSyCL_BFKuiVGND2hhCPvdm_nq2EbWDbRjAg",
      authDomain: "ajli-d22a6.firebaseapp.com",
      databaseURL: "https://ajli-d22a6.firebaseio.com",
      projectId: "ajli-d22a6",
      storageBucket: "ajli-d22a6.appspot.com",
      messagingSenderId: "194550413431",
      appId: "1:194550413431:web:4b2f030fca90a217a96e72",
      measurementId: "G-MH3FN4RVT9"
  	};
  	firebase.initializeApp(config);
  }

  newStorage(newUser, highScore) {
    firebase.database().ref("/users/"+newUser.uid).set({
      username: newUser.email,
      highScore: highScore
    });
  }

  signUp(email) {
    return firebase.app().auth().createUserWithEmailAndPassword(email, "123456")
      .then(results => {
        this.newStorage(results.user, 0);
        this.username = results.user.email;
        localStorage.setItem("userid", results.user.uid);
        localStorage.setItem("username", results.user.email);
        return true;
      })
      .catch(error => {
        alert(error);
        return false;
    	});
  }

  logIn(email) {
    return firebase.auth().signInWithEmailAndPassword(email, "123456")
      .then(results => {
        localStorage.setItem("username", results.user.email);
        localStorage.setItem("userid", results.user.uid);
        return true;
      })
      .catch(error => {
    		alert(error);
        return false;
    	});
    }


    getHighscore() {
      return firebase.database().ref("/users/"+localStorage.getItem("userid")).once('value')
        .then(function(snapshot) {
          let highScore = (snapshot.val() && snapshot.val().highScore);
          return highScore;
        })
    }

    setHighscore(highScore) {
      var postData = {
        username: localStorage.getItem("username"),
        highScore: highScore
      };
      var updates = {};
      updates['/users/' + localStorage.getItem("userid")] = postData;
      return firebase.database().ref().update(updates);
    }

    resetUser(){
      firebase.auth().signOut().then(function() {
      }).catch(function(error) {
        alert(error)
      });
      localStorage.clear();
      localStorage.setItem("userid", null);
      localStorage.setItem("username", null);
      localStorage.setItem("counter", 0);
    }

  getQuestions(){
    let amount = localStorage.getItem("numOfQuestions");
    let difficulty = localStorage.getItem("difficulty");
    let type = localStorage.getItem("type");
    let category = localStorage.getItem("categoryID");
    return fetch(`${API_URL}/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`) //${category}& ${type} ${difficulty}
      .then(response => {
        return response.json();
      })
      .then(data => {
        data.results.forEach(d => this.addQuestion(d));
        return data.results;
      })
      .catch(err => {
        console.log(err);
      });
  }

  addQuestion(question){
    this.quiz.push(question);
    localStorage.setItem("quiz", this.quiz);
  }

  addCategory(id){
    this.selectedCategories = id;
    this.notifyObservers();
    localStorage.setItem("categoryID", this.selectedCategories);
  }

  addDifficulty(difficulty){
    this.selectedDiff = difficulty;
    this.notifyObservers();
    localStorage.setItem("difficulty", this.selectedDiff);
  }

  addType(type){
    this.selectedType = type;
    this.notifyObservers();
    localStorage.setItem("type", this.selectedType);
  }

  addNumberOfQuestions(amount){
    this.selectedNrOfQuestions = amount;
    this.notifyObservers();
    localStorage.setItem("numOfQuestions", this.selectedNrOfQuestions);
  }

  getCurrentQuestion(id) {
    let quiz = localStorage.getItem("quiz");
    return quiz[id];
  }

  setCurrentQuestion(id) {
    this.currentQuestion = id;
    localStorage.setItem("currentQuestion", id);
  }

  getCurrentQuestion() {
    return this.currentQuestion;
  }

  getNumberOfQuestions() {
    return (this.quiz.length);
  }

  getSelectedNumberOfQuestions(){
    return this.selectedNrOfQuestions;
  }

  getSelectedCategories(){
    return this.selectedCategories;
  }

  getSelectedDifficulty(){
    return this.selectedDiff;
  }

  getSelectedType(){
    return this.selectedType;
  }

  getQuizCategory(){
    return this.categoryList[localStorage.getItem("categoryID")];
  }

  resetQuiz(){
    this.selectedCategories = null;
    this.selectedDiff = null;
    this.selectedType = null;
    this.selectedNrOfQuestions = null;
    let user = localStorage.getItem("username");
    let hs = localStorage.getItem("highscore");
    let id = localStorage.getItem("userid");
    localStorage.clear();
    localStorage.setItem("username", user);
    localStorage.setItem("user", user);
    localStorage.setItem("counter", 0);
    localStorage.setItem("highscore", hs);
    localStorage.setItem("userid", id);
  }

  populateArray(){
    this.categoryList[9] = "General Knowledge";
    this.categoryList[10] = "Entertainment: Books";
    this.categoryList[11] = "Entertainment: Film";
    this.categoryList[12] = "Entertainment: Music";
    this.categoryList[13] = "Entertainment: Musicals & Theatres";
    this.categoryList[14] = "Entertainment: Television";
    this.categoryList[15] = "Entertainment: Video Games";
    this.categoryList[16] = "Entertainment: Board Games";
    this.categoryList[17] = "Science & Nature";
    this.categoryList[18] = "Science: Computers";
    this.categoryList[19] = "Science: Mathematics";
    this.categoryList[20] = "Mythology";
    this.categoryList[21] = "Sports";
    this.categoryList[22] = "Geography";
    this.categoryList[23] = "History";
    this.categoryList[24] = "Politics";
    this.categoryList[25] = "Art";
    this.categoryList[26] = "Celebrities";
    this.categoryList[27] = "Animals";
    this.categoryList[28] = "Vehicles";
    this.categoryList[29] = "Entertainment: Comics";
    this.categoryList[30] = "Science: Gadgets";
    this.categoryList[31] = "Entertainment: Japanese Anime & Manga";
    this.categoryList[32] = "Entertainment: Cartoon & Animations";
  }
}

const modelInstance = new QuizModel();
export default modelInstance;
