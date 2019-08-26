import React, { Component } from "react";
import axios from "axios";

//  CSS
import "./App.css";

//  Components
import Nav from './Component/Nav'
import RouteManager from './Component/RouteManager'

class App extends Component {
  constructor() {
    super();
    this.state = {
      champions: "",
      teams: [],
      loaded: false
    };
  }

  componentDidMount() {
    //  Get champions data
    axios
      .get("https://lolbuilder.herokuapp.com/")

      .then(champion_data => {
        this.setState({ champions: champion_data.data });
      })

      .catch(err => {
        console.error(err);
      });

    // Get teams
    axios
      .get("https://lolbuilder.herokuapp.com/team",
        { mode: "no-cors" })

      .then(teams_data => {
        this.setState({ teams: teams_data.data });
      })

      .catch(err => {
        console.error(err);
      });
  }


  render() {
    if (this.state.teams && this.state.champions) {
      return (
      <div className="App">
        <Nav />
        {this.content}
        <RouteManager
          champions={this.state.champions}
          teams={this.state.teams}
        />
      </div>)
    }
    else return (
      <div className="App">
        <Nav />
        <h1>loading...</h1>
      </div>
    )
  }
}

export default App;
