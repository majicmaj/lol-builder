import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Nav extends Component {
    render() {
        return <nav className="navbar">
            <div className="leftnav">
                <Link to="/">
                    <div className="logo" />
                </Link>
            </div>

            <div className="rightnav">
                <Link to="/builder">
                    <h3>Builder</h3>
                </Link>
                <Link to="/teams">
                    <h3>Teams</h3>
                </Link>
                <Link to="/champions">
                    <h3>Champions</h3>
                </Link>
            </div>
        </nav>
    }
}

export default Nav;
