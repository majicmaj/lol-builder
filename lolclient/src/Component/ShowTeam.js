import React, { Component } from "react";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import "../App.css";

class ShowTeam extends Component {
  render() {
    let teams;
    console.log(this.props);
    if (this.props.team !== []) {
      console.log('this is props')
      console.log(this.props)
      teams = this.props.team.map(each => {
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
        const data = [
          {
            data: {
              attack: each.attack / 50,
              defense: each.defense / 50,
              magic: each.magic / 50,
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
          <div key={each._id} className="eachteam">
            <h3>{each.name}</h3>
            <div className="teamiconcontain">
              <img className="teamicons" data-role="top" src={topchamp[0].icon} />
              <img className="teamicons" src={jgchamp[0].icon} />
              <img className="teamicons" src={midchamp[0].icon} />
              <img className="teamicons" src={adcchamp[0].icon} />
              <img className="teamicons" src={supchamp[0].icon} />
              <div className='button'>
                <button className='lol-style' >Edit</button>
                <button className='lol-style'>Delete</button>
              </div>
            </div>
            <RadarChart
              captions={captions}
              data={data}
              size={300}
              scales={3}
              className='chart'
            />
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
