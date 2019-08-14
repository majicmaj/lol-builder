import React, { Component } from "react";
import "../App.css";

class ShowTeam extends Component {
  render() {
    let teams;
    if (this.props.team !== []) {
      console.log('this is props')
      console.log(this.props)
      teams = this.props.team.map(each => {
        // console.log(this.props.champ);
        let topchamp = this.props.champ.filter(
          eachchamp => eachchamp._id === each.top
        );
        let jgchamp = this.props.champ.filter(
          eachchamp => eachchamp._id === each.jun
        );
        let midchamp = this.props.champ.filter(
          eachchamp => eachchamp._id === each.mid
        );
        let adcchamp = this.props.champ.filter(
          eachchamp => eachchamp._id === each.bot
        );
        let supchamp = this.props.champ.filter(
          eachchamp => eachchamp._id === each.sup
        );

        return (
          <div key={each._id} className="eachteam">
            <h3>Team Name: {each.name}</h3>
            <div class="teamiconcontain">
              {" "}
              <img class="teamicons" data-role="top" src={topchamp[0].icon} />
              <img class="teamicons" src={jgchamp[0].icon} />
              <img class="teamicons" src={midchamp[0].icon} />
              <img class="teamicons" src={adcchamp[0].icon} />
              <img class="teamicons" src={supchamp[0].icon} />
            </div>
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
