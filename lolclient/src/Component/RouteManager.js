import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

//  CSS

//  Components
import Champion from "./Champion";
import Team from "./Team";
import ChampionDetail from "./ChampionDetail";
import ShowTeam from "./ShowTeam";

class RouteManager extends Component {

    render() {
        return (
            <div className="routeManager">
                {/* Home */}
                <Route
                    path="/"
                    exact
                    render={() =>
                        <Team
                            champions={this.props.champions}
                        />
                    }
                />

                {/* Builder */}
                <Route
                    path="/builder"
                    exact render={() => <Redirect
                        to="/"
                    />
                    }
                />

                <Route
                    path="/champions"
                    exact
                    render={routeProps => (
                        <Champion champions={this.props.champions} {...routeProps} />
                    )}
                />

                <Route
                    path="/champions/:championName"
                    exact
                    render={routeProps => (
                        <ChampionDetail champions={this.props.champions} {...routeProps} />
                    )}
                />

                <Route
                    path="/teams"
                    exact
                    render={routeProps => (
                        <ShowTeam
                            teams={this.props.teams}
                            champions={this.props.champions}
                        />
                    )}
                />
            </div>
        );
    }
}

export default RouteManager;
