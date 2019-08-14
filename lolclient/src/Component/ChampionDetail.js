import React, { Component } from "react";
import "../App.css";

class ChampionDetail extends Component {
  render() {
    let thischamp = this.props.champ.filter(eachchamp => {
      return eachchamp.name === this.props.match.params.championName;
    });
    // console.log(thischamp);
    return (
      <div class="championdetailmain">
        <div
          class="champfull"
          style={{ backgroundImage: `url(${thischamp[0].full})` }}
        />
        <div class="champinfo">
          {/* <h2>ChampionDetail</h2> */}
          <h2>{thischamp[0].name}</h2>
          <h3>{thischamp[0].title}</h3>
          <h3>{thischamp[0].blurb}</h3>
          <h3>attack: {thischamp[0].attack}</h3>
          <h3>defense: {thischamp[0].defense}</h3>
          <h3>magic: {thischamp[0].magic}</h3>
          <svg height="300" width="300">
            <polygon points="200,0 100,173 200,0" />
          </svg>
        </div>
      </div>
    );
  }
}

export default ChampionDetail;
