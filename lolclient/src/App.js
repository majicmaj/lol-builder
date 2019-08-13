import React from "react";
import logo from "./logo.svg";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Champion from "./Component/Champion";
import Team from "./Component/Team";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/">
          <div className="icon" />
        </Link>
        <Link to="/">
          <h2 id="leageteambuilder"> Leage team builder</h2>
        </Link>
        <Link to="/team">
          <h2> Team</h2>
        </Link>
        <Link to="/champions">
          <h2> Champions</h2>
        </Link>
      </nav>
      <main>
        <Route path="/" exact render={routeProps => <Team {...routeProps} />} />
        <Route path="/team" exact render={() => <Redirect to="/" />} />

        <Route
          path="/champions"
          exact
          render={routeProps => <Champion {...routeProps} />}
        />
      </main>
    </div>
  );
}

export default App;
