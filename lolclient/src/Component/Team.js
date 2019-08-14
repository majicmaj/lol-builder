import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "../App.css";

class Team extends Component {
  render() {
    console.log(this.props.champ);
    let champsicon;
    if (this.props.champ !== "") {
      champsicon = this.props.champ.map(each => {
        return (
          <div
            class="eachicon"
            key={each.name}
            style={{ backgroundImage: `url(${each.icon})` }}
          />
        );
      });
    }

    return (
      <div>
        <h1>This is the team page</h1>
        <div className="teamtop test">
          <div className="teamchamp test" data-role="top">
            top
          </div>
          <div className="teamchamp test" data-role="top">
            jg
          </div>
          <div className="teamchamp test" data-role="top">
            mid
          </div>
          <div className="teamchamp test" data-role="top">
            adc
          </div>
          <div className="teamchamp test" data-role="top">
            sup
          </div>
        </div>
        <div className="teambottom test">{champsicon}</div>
      </div>
    );
  }
}

export default Team;
