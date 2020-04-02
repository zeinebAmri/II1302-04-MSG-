import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-page1">
        <p className="contact-title1">FOUNDERS</p>
        <div className="founders">
          <div className="jb">
            <img alt="Jasmine" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/82542855_833828990410742_5885283618581905408_n.jpg?_nc_cat=102&_nc_ohc=BtLSzNMRQSsAX-e_nxt&_nc_ht=scontent-arn2-1.xx&oh=2269e2a8d79abc83b35d9d01cb9c9659&oe=5E985C2A" className="bildjb"></img>
            <p className="contact-title3"> Jasmine Bergdahl</p>
            <p className="contact-title4"> Email: jasber@kth.se</p>
          </div>
          <div className="ir">
            <img alt="Ina" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/p1080x2048/82193797_506439776649040_6857101466306347008_n.jpg?_nc_cat=110&_nc_ohc=HeZoctuw3tgAX8ecJKF&_nc_ht=scontent-arn2-1.xx&_nc_tp=1&oh=608c5387c24205da1d701566e1afab24&oe=5E9FA021" className="bildir"></img>
            <p className="contact-title5"> Ina Rickman</p>
            <p className="contact-title6"> Email: inaric@kth.se</p>
          </div>
          <div className="ah">
            <img alt="Amanda" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/82082680_2623308941247846_4807040144869687296_n.jpg?_nc_cat=110&_nc_ohc=qx3rWJEwTvwAX-QtHDq&_nc_ht=scontent-arn2-1.xx&oh=139c97530fc7955340ef62454b6dc900&oe=5EAA8707" className="bildah"></img>
            <p className="contact-title7">Amanda Heynes</p>
            <p className="contact-title8"> Email: heynes@kth.se</p>
          </div>
          <div className="lj">
            <img alt="Corneliea" src="https://scontent-hel2-1.xx.fbcdn.net/v/t1.15752-9/92110960_249151219448097_7344709309579657216_n.jpg?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=_eLC5FNgS6MAX-ty-8F&_nc_ht=scontent-hel2-1.xx&oh=f716049feb6e2db7bbba061ad231b895&oe=5EA7C131" className="bildlj"></img>
            <p className="contact-title9">Cornelia Sundqvist</p>
            <p className="contact-title10"> Email: cosu@kth.se</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
