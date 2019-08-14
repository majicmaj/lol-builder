import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "../App.css";
import Axios from "axios";

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
      sup: ""
    };
  }
  handleClick = champion => {
    this.setState({ champion: champion });
  };

  placeTop = () => {
    if (this.state.champion &&
      this.state.champion != this.state.mid &&
      this.state.champion != this.state.bot &&
      this.state.champion != this.state.jun &&
      this.state.champion != this.state.sup ) {
      this.setState({
        top: this.state.champion,
        champion: ""
      });
    }
  };
  placeMid = () => {
    if (this.state.champion &&
      this.state.champion != this.state.top &&
      this.state.champion != this.state.bot &&
      this.state.champion != this.state.jun &&
      this.state.champion != this.state.sup) {
      this.setState({
        mid: this.state.champion,
        champion: ""
      });
    }
  };
  placeBot = () => {
    if (this.state.champion &&
      this.state.champion != this.state.mid &&
      this.state.champion != this.state.top &&
      this.state.champion != this.state.jun &&
      this.state.champion != this.state.sup) {
      this.setState({
        bot: this.state.champion,
        champion: ""
      });
    }
  };
  placeSup = () => {
    if (this.state.champion &&
      this.state.champion != this.state.mid &&
      this.state.champion != this.state.bot &&
      this.state.champion != this.state.jun &&
      this.state.champion != this.state.top) {
      this.setState({
        sup: this.state.champion,
        champion: ""
      });
    }
  };
  placeJun = () => {
    if (this.state.champion &&
      this.state.champion != this.state.mid &&
      this.state.champion != this.state.bot &&
      this.state.champion != this.state.top &&
      this.state.champion != this.state.sup) {
      this.setState({
        jun: this.state.champion,
        champion: ""
      });
    }
  };
  handleInputChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  submit = () => {
    console.log(this.state);
    if (
      this.state.top &&
      this.state.jun &&
      this.state.mid &&
      this.state.bot &&
      this.state.sup &&
      this.state.name){
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
          jun: '',
          top: '',
          mid: '',
          bot: '',
          sup: '',
          champion: ''
        })
      alert('submitted!')}
    )
  }else {alert('incomplete fields!')}
}
  render() {
    let champsicon;
    if (this.props.champ) {
      champsicon = this.props.champ.map(each => {
        return (
          <div
            className="eachicon"
            key={each._id}
            style={{ backgroundImage: `url(${each.icon})` }}
            onClick={() => this.handleClick(each)}
          >
            <p>{each.name}</p>
          </div>
        );
      });
    }

    return (
      <div>
        <h1>Create a team</h1>
        <div className="teamtop">
          <div
            className="eachicon"
            style={{
              backgroundColor: "rgb(20, 25, 46)",
              backgroundImage: `url(${this.state.top.icon})`,
              border: "1px solid yellow"
            }}
            onClick={() => this.placeTop()}
          >
            <h4>{this.state.top.name}</h4>
          </div>
          <div
            className="eachicon"
            style={{
              backgroundColor: "rgb(20, 25, 46)",
              backgroundImage: `url(${this.state.jun.icon})`,
              border: "1px solid yellow"
            }}
            onClick={() => this.placeJun()}
          >
            <h4>{this.state.jun.name}</h4>
          </div>
          <div
            className="eachicon"
            style={{
              backgroundColor: "rgb(20, 25, 46)",
              backgroundImage: `url(${this.state.mid.icon})`,
              border: "1px solid yellow"
            }}
            onClick={() => this.placeMid()}
          >
            <h4>{this.state.mid.name}</h4>
          </div>
          <div
            className="eachicon"
            style={{
              backgroundColor: "rgb(20, 25, 46)",
              backgroundImage: `url(${this.state.bot.icon})`,
              border: "1px solid yellow"
            }}
            onClick={() => this.placeBot()}
          >
            <h4>{this.state.bot.name}</h4>
          </div>
          <div
            className="eachicon"
            style={{
              backgroundColor: "rgb(20, 25, 46)",
              backgroundImage: `url(${this.state.sup.icon})`,
              border: "1px solid yellow"
            }}
            onClick={() => this.placeSup()}
          >
            <h4>{this.state.sup.name}</h4>
          </div>
        </div>
        <div className=''>
          <h4>Team Name</h4>
          <input type='text' value={this.state.value} onInput={this.handleInputChange} className="lol-style" />
          <button className="lol-style" onClick={() => this.submit()}>
            Submit
          </button>
        </div>
        <div className="teambottom">{champsicon}</div>
      </div>
    );
  }
}

export default Team;
