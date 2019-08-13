import React, { Component } from "react";
import "../App.css";

class Team extends Component {
  render() {
    return (
      <div>
        <h1>This is the team page</h1>
        <div class="teamtop test">
          <div class="teamchamp test" data-role="top">
            top
          </div>
          <div class="teamchamp test" data-role="top">
            jg
          </div>
          <div class="teamchamp test" data-role="top">
            mid
          </div>
          <div class="teamchamp test" data-role="top">
            adc
          </div>
          <div class="teamchamp test" data-role="top">
            sup
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
