import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
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
      teams: []
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
    return (
      <div className="App">
        <Nav />
        <RouteManager
          champions={this.state.champions}
          teams={this.state.teams}
        />
      </div>
    );
  }
}

export default App;
