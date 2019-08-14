import React, { Component } from "react";
import "../App.css";

class ShowTeam extends Component {
  //   findicon = champid => {
  //     if (this.props.champ !== "") {
  //       this.props.champ.filter(each => {
  //         return each._id === champid;
  //       });
  //     }
  //   };
  render() {
    let teams;
    if (this.props.team !== []) {
      teams = this.props.team.map(each => {
        return (
          <div key={each.name} className="eachteam test">
            <h3>{each.name}</h3>
            <p>Top:{each.top}</p>
            <p>Jun:{each.jun}</p>
            <p>Mid:{each.mid}</p>
            <p>Bot:{each.bot}</p>
            <p>Sup:{each.sup}</p>
          </div>
        );
      });
    }

    return (
      <div className="showteam">
        <h1>show all team</h1>
        {teams}
      </div>
    );
  }
}

export default ShowTeam;
