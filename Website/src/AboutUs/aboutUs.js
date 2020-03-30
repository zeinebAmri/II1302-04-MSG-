import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./aboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUs-page1">
        <p className="aboutus-title1">ABOUT US</p>
        <p className="aboutus-title2">We are 4 female students from the Computer Sciene program at KTH. </p>
        <p className="aboutus-title3"> This is our project for the course Interaction Programming and the Dynamic Web. </p>
        <div className="pictures">
          <img src = "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=domenico-loia-hGV2TfOh0ns-unsplash.jpg" className = "picture1"></img>
          <img src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=christopher-gower-m_HRfLhgABo-unsplash.jpg" className = "picture2"></img>
          <img src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=clement-h-95YRwf6CNw8-unsplash.jpg" className = "picture3"></img>
        </div>
       
       </div>
    );
  }
}

export default AboutUs;
