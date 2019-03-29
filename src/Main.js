import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Media from "./Media";
import About from "./About";
import Events from "./Events";

class Main extends Component {
    render(){
        return (
        <HashRouter>
            <div>
                <h1 className="main-title">The Color of Tech</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">HOME</NavLink></li>
                        <li><NavLink to = "/media">MEDIA</NavLink></li>
                        <li> <NavLink to="/events">EVENTS</NavLink></li>
                        <li> <NavLink to="/about">ABOUT</NavLink></li>
                    </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/media" component={Media}/>
                <Route path="/about" component={About}/>
                <Route path="/events" component={Events}/>
            </div>
        </div>
        </HashRouter>
        );
    }
}
export default Main;