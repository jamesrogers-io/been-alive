import React, { Component } from 'react';
import chromeSkull from '../assets/chrome.png';

class AgeStats extends Component {
  // Helper
  timeSince(date) {
    let today = new Date().getTime(); // JS methods to get the current time
    let otherDate = new Date(date).getTime(); // the new input date
    let difference = Math.abs(today - otherDate); // comparing the difference
    // below, these just calculate our input into days, months, years. dont need to know.
    let days = Math.floor(difference / (1000*3600*24));
    let years = Math.floor(days/365);
    days -= years*365;
    let months = Math.floor(days/31);
    days -= months*31;

    return `${years} years, ${months} months, and ${days} days`
  }
  render() {
    return (
      <div>
          <h3>{this.props.date}</h3>

          <h4>You've been alive for  {this.timeSince(this.props.date)}</h4>

          <img src={chromeSkull} alt="chrome skull" className="chromeSkull" />
      </div>
  )
 }
}

export default AgeStats;
