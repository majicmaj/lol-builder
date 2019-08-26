import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Champion.css";

class Champion extends Component {
  render() {
    let champions
    if (this.props.champions) {
      console.log(this.props)
      champions = this.props.champions.map(eachcham => {
        return (
          <Link key={eachcham.name} to={"/champions/" + eachcham.name}>
            <div
              className="champion"
              key={eachcham.name}
              style={{ backgroundImage: `url(${eachcham.screen})` }}
            >
              <p>{eachcham.name}</p>
            </div>
          </Link>
        );
      })
    }
    return (
      <div className="champions_container">
        <h2>All Champions</h2>
        <div className="champions_wrapper">{champions}</div>
      </div>
    );
  }
}

export default Champion;
