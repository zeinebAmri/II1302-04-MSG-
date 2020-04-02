import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import modelInstance from "./data/DisplayModel";
import Home from "./Home/home";
import Confirm from "./Confirm/Confirm";
import Message from "./Message/Message";
import AboutUs from "./AboutUs/aboutUs";
import Contact from "./Contact/contact";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "MSG DLVRY",
      username:null,
    };
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Link to="/">
            <img className="logo" alt="logo" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/81941738_2827638963959351_4037664515490316288_n.png?_nc_cat=101&_nc_ohc=4Yoloc1KL7AAQn8QiWSudnHK6PVBmxNlGmSQ1jATv10lnAXW2PKkdNAfw&_nc_ht=scontent-arn2-1.xx&oh=816d7dfdfee239d2e75f275ac53617ef&oe=5EAFE9FC"></img>
            <p className="msgDlvry">MSG DLVRY</p>
          </Link>
          <Link to="/contact">
            <p className="contact">Contact</p>
          </Link>
          <Link to="/aboutus">
            <p className="about-us">About us</p>
          </Link>
          <Link to="/">
            <p className="homeText">Home</p>
          </Link>

        </div>
          {/* We rended diffrent component based on the path */}
      <Route exact path="/" component={Home} />

      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/contact" component={Contact}/>

      <Route
        path="/confirm"
        render={() => <Confirm model={modelInstance} />}
      />

      <Route
        path="/message"
        render={() => <Message model={modelInstance} />}
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
