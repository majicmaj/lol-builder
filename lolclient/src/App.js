import React from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Champion from "./Component/Champion";

function App() {
  return (
    <div className="App">
      <nav class="navbar">
        <Link to="/">
          <div class="icon" />
        </Link>
        <h2 id="leageteambuilder"> Leage team builder</h2>
        <h2> Team</h2>
        <h2> Champions</h2>
      </nav>
      <main>
        <Route
          path="/"
          exact
          render={routeProps => <Champion {...routeProps} />}
        />
      </main>
    </div>
  );
}

export default App;
