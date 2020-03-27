import React, { Component } from "react";
// import "../App.css";
import "./ChampionDetail.css";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

class ChampionDetail extends Component {
  render() {
    if (this.props.champions) {
      let thischamp = this.props.champions.filter(eachchamp => {
        return eachchamp.name === this.props.match.params.championName;
      });
      const data = [
        {
          data: {
            attack: thischamp[0].attack / 9,
            defense: thischamp[0].defense / 9,
            magic: thischamp[0].magic / 9
          },
          meta: { color: "#0df" }
        }
      ];

      const captions = {
        // columns
        attack: "Attack",
        defense: "Defense",
        magic: "Magic"
      };
      // console.log(thischamp);
      return (
        <div className="championdetail_wrapper">
          <div className="championdetailmain">
            <div
              class="champfull"
              style={{ backgroundImage: `url(${thischamp[0].full})` }}
            >
              {/* <h2>ChampionDetail</h2> */}
              <h1>{thischamp[0].name}</h1>
              <h3>{thischamp[0].title}</h3>
              <h3>{thischamp[0].blurb}</h3>
              <RadarChart
                captions={captions}
                data={data}
                size={300}
                scales={3}
                className="chart"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>wayment..</h1>;
    }
  }
}

export default ChampionDetail;
