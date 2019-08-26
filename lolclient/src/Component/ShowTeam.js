import React, { Component } from "react";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import "./ShowTeam.css";
import Axios from "axios";

class ShowTeam extends Component {
  delete(that) {
    Axios.delete('https://lolbuilder.herokuapp.com/team/delete/id/' + that.target.name)
    .then(res=> {
      console.log({res})
      alert('deleted!')
    })
    .catch(error=> console.error(error))
  }
  render() {
    let teams;
    if (this.props.teams && this.props.champions) {
      teams = this.props.teams.map(each => {
        let topchamp = this.props.champions.filter(
          eachchamp => eachchamp._id === each.top
        );
        console.log(topchamp)
        let jgchamp = this.props.champions.filter(
          eachchamp => eachchamp._id === each.jun
        );
        let midchamp = this.props.champions.filter(
          eachchamp => eachchamp._id === each.mid
        );
        let adcchamp = this.props.champions.filter(
          eachchamp => eachchamp._id === each.bot
        );
        let supchamp = this.props.champions.filter(
          eachchamp => eachchamp._id === each.sup
        );
        const data = [
          {
            data: {
              attack: each.attack / 45,
              defense: each.defense / 45,
              magic: each.magic / 45,
            },
            meta: { color: '#0df' }
          }
        ];

        const captions = {
          // columns
          attack: 'Attack',
          defense: 'Defense',
          magic: 'Magic',
        };

        return (
          <div key={each._id} className="team_wrapper">
            <h3>{each.name}</h3>
            <div className="teamiconcontain">
              <img alt={topchamp[0].name} className="teamicons" src={topchamp[0].icon} />
              <img alt={jgchamp[0].name}  className="teamicons" src={jgchamp[0].icon} />
              <img alt={midchamp[0].name}  className="teamicons" src={midchamp[0].icon} />
              <img alt={adcchamp[0].name}  className="teamicons" src={adcchamp[0].icon} />
              <img alt={supchamp[0].name}  className="teamicons" src={supchamp[0].icon} />
            </div>
            <RadarChart
              captions={captions}
              data={data}
              size={300}
              scales={3}
              className='chart'
            />
            <div className='button'>
              <button className='lol-style' >Edit</button>
              <button className='lol-style' name={each._id} onClick={this.delete}>Delete</button>
            </div>

          </div>
        );
      });
    }

    return (
      <div className="team_main">
        <h1>Saved Teams</h1>
        {teams}
      </div>
    );
  }
}

export default ShowTeam;
