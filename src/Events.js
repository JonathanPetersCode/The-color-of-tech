import React, { Component } from 'react'
import blackIsTechPic from "./images/blackistechPic.png";
import roadToBillionsTech from "./images/roadToBillionsTech.png"
import reactCon from "./images/reactCon.png";
import techspo from "./images/techspo-img.jpg";

class Events extends Component {
  render() {
    return (
      <div>
        <h2 className="title section-title">Events</h2> 
                <div className="events">
                    <a href="https://bit.ly/2SlD3LC">
                    <img id="event__item" src={blackIsTechPic} alt="Black is Tech Conference"/></a>
                    <a href="https://bit.ly/2GkYINw"><img id="event__item" src={roadToBillionsTech} alt="Road to Billion Conference"/></a>
                    <a href="https://bit.ly/2SEQmpR"><img id="event__item" src={reactCon} alt="React Conference NYC"/></a>
                    <div className="event-style">
                    <a href="https://bit.ly/2VWTfAw"><img id="event__item" src={techspo} alt="Techspo Summit"/></a>
                    </div>
            </div>
      </div>
    )
  }
}

export default Events;

