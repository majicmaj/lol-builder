import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "../App.css";

class Champion extends Component {
  render() {
    let champions = this.props.champ.map(eachcham => {
      return (
        <Link to={"/champions/" + eachcham.name}>
          <div
            className="eachcham"
            key={eachcham.name}
            style={{ backgroundImage: `url(${eachcham.screen})` }}
          >
            <p>{eachcham.name}</p>
          </div>
        </Link>
      );
    });
    return (
      <div className="championmain flexcolumn">
        <h2>All Champions</h2>
        <div className="allchamcontain test">{champions}</div>
      </div>
    );
  }
}

export default Champion;
