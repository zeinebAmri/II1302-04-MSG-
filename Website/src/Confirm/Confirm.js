import React, { Component } from "react";
import "./Confirm.css";
import Message from "../Message/Message";

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    };
  }

  render() {
    let message = document.querySelector(Message.userInput);
    return (
      <div className="confirmText">Your submission was successful!
        <div className="confirmText2">The text that will be sumbmitted is:
          <div className="confirmText3">{message}</div>
        </div>
      </div>
    );
  }
}

export default Confirm;
