import React, { Component } from "react";
import "./Team.css";
import Axios from "axios";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

class Team extends Component {
  constructor() {
    super();
    this.state = {
      champion: "",
      name: "",
      jun: "",
      top: "",
      mid: "",
      bot: "",
      sup: "",
      data: [
        {
          data: {
            attack: 0.01,
            defense: 0.01,
            magic: 0.01
          },
          meta: { color: '#0df' }
        }
      ],
      captions: {
        attack: 'Attack',
        defense: 'Defense',
        magic: 'Magic'
      }
    }

  }
  handleClick = champion => {
    this.setState({ champion: champion });
  };

  placeTop = () => {
    if (
      this.state.champion &&
      this.state.champion !== this.state.mid &&
      this.state.champion !== this.state.bot &&
      this.state.champion !== this.state.jun &&
      this.state.champion !== this.state.sup
    ) {
      this.setState({
        top: this.state.champion,
        champion: ""
      },
        this.updateChart);
    }
  };
  placeMid = () => {
    if (
      this.state.champion &&
      this.state.champion !== this.state.top &&
      this.state.champion !== this.state.bot &&
      this.state.champion !== this.state.jun &&
      this.state.champion !== this.state.sup
    ) {
      this.setState({
        mid: this.state.champion,
        champion: ""
      },
        this.updateChart);
    }
  };
  placeBot = () => {
    if (
      this.state.champion &&
      this.state.champion !== this.state.mid &&
      this.state.champion !== this.state.top &&
      this.state.champion !== this.state.jun &&
      this.state.champion !== this.state.sup
    ) {
      this.setState({
        bot: this.state.champion,
        champion: ""
      },
        this.updateChart);
    }
  };
  placeSup = () => {
    if (
      this.state.champion &&
      this.state.champion !== this.state.mid &&
      this.state.champion !== this.state.bot &&
      this.state.champion !== this.state.jun &&
      this.state.champion !== this.state.top
    ) {
      this.setState({
        sup: this.state.champion,
        champion: ""
      },
        this.updateChart);
    }
  };
  placeJun = () => {
    this.updateChart()
    if (
      this.state.champion &&
      this.state.champion !== this.state.mid &&
      this.state.champion !== this.state.bot &&
      this.state.champion !== this.state.top &&
      this.state.champion !== this.state.sup
    ) {
      this.setState({
        jun: this.state.champion,
        champion: ""
      },
        this.updateChart)
    }
  };

  handleInputChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  submit = () => {
    console.log(this.state);
    if (this.state.top &&
      this.state.mid &&
      this.state.bot &&
      this.state.sup &&
      this.state.jun &&
      this.state.name) {
      Axios.post("https://lolbuilder.herokuapp.com/team/create", {
        name: this.state.name,
        attack:
          this.state.top.attack +
          this.state.mid.attack +
          this.state.bot.attack +
          this.state.jun.attack +
          this.state.sup.attack,
        defense:
          this.state.top.defense +
          this.state.mid.defense +
          this.state.bot.defense +
          this.state.jun.defense +
          this.state.sup.defense,
        magic:
          this.state.top.magic +
          this.state.mid.magic +
          this.state.bot.magic +
          this.state.jun.magic +
          this.state.sup.magic,
        top: this.state.top._id,
        mid: this.state.mid._id,
        jun: this.state.jun._id,
        bot: this.state.bot._id,
        sup: this.state.sup._id,
        champion: [
          this.state.top._id,
          this.state.mid._id,
          this.state.jun._id,
          this.state.bot._id,
          this.state.sup._id
        ]
      }).then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          top: '',
          jun: '',
          bot: '',
          mid: '',
          sup: '',
          champion: '',
        })
      }).then(() => alert('success!'));
    }else {alert('make sure all roles are filled.')}
  }

  updateChart = () => {
    console.log('UPDATED!!')
    this.setState({
      data: [
        {
          data: {
            attack:
              ((this.state.jun.attack || 0) +
                (this.state.top.attack || 0) +
                (this.state.bot.attack || 0) +
                (this.state.sup.attack || 0) +
                (this.state.mid.attack || 0) +
                0.01) / 45,
            defense:
              ((this.state.jun.defense || 0) +
                (this.state.top.defense || 0) +
                (this.state.bot.defense || 0) +
                (this.state.sup.defense || 0) +
                (this.state.mid.defense || 0) +
                0.01) / 45,
            magic:
              ((this.state.jun.magic || 0) +
                (this.state.top.magic || 0) +
                (this.state.bot.magic || 0) +
                (this.state.sup.magic || 0) +
                (this.state.mid.magic || 0) +
                0.01) / 45,
          },
          meta: { color: '#0df' }
        }
      ],
    })
    this.forceUpdate()
  }
  render() {
    console.log(this.props)
    let champsicon;
    if (this.props.champions) {
      champsicon = this.props.champions.map(each => {
        return (
          <div
            className="icon"
            key={each._id}
            style={{ backgroundImage: `url(${each.icon})` }}
            onClick={() => this.handleClick(each)}
          >
            <h3 className='champName'>{each.name}</h3>
            <p className='champStats'>A{each.attack},D{each.defense},M{each.magic}</p>
          </div>
        );
      });
    }

    return (
      <main className='team_main'>
        <div className='team_builder'>

          <h1>Team builder</h1>
          <p>Click on your desired champion's icons and then click on the position you would like to place them.</p>

          <div className="team">
            <div
              className="icon"
              style={{
                backgroundColor: "#002",
                backgroundImage: `url(${this.state.top.icon})`,
                border: "1px solid #fb0"
              }}
              onClick={() => this.placeTop()}
            >
              <h3 className='champName'>{this.state.top.name}</h3>
            </div>
            <div
              className="icon"
              style={{
                backgroundColor: "#002",
                backgroundImage: `url(${this.state.jun.icon})`,
                border: "1px solid #fb0"
              }}
              onClick={() => this.placeJun()}
            >
              <h3 className='champName'>{this.state.jun.name}</h3>
            </div>
            <div
              className="icon"
              style={{
                backgroundColor: "#002",
                backgroundImage: `url(${this.state.mid.icon})`,
                border: "1px solid #fb0"
              }}
              onClick={() => this.placeMid()}
            >
              <h3 className='champName'>{this.state.mid.name}</h3>
            </div>
            <div
              className="icon"
              style={{
                backgroundColor: "#002",
                backgroundImage: `url(${this.state.bot.icon})`,
                border: "1px solid #fb0"
              }}
              onClick={() => this.placeBot()}
            >
              <h3 className='champName'>{this.state.bot.name}</h3>
            </div>
            <div
              className="icon"
              style={{
                backgroundColor: "#002",
                backgroundImage: `url(${this.state.sup.icon})`,
                border: "1px solid #fb0"
              }}
              onClick={() => this.placeSup()}
            >
              <h3 className='champName'>{this.state.sup.name}</h3>
            </div>
          </div>
          <RadarChart
            captions={this.state.captions}
            data={this.state.data}
            size={250}
            scales={3}
            className='chart'
          />
          <div className="">
            <h4>Team Name</h4>
            <input onInput={this.handleInputChange} className="lol-style" />
            <button className="lol-style" onClick={() => this.submit()}>
              Submit
            </button>
          </div>
        </div>
        <div className='team_picker'>
          {champsicon}
        </div>
      </main>
    );
  }
}

export default Team;
