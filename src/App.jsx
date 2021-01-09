import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";

import Deck from "./components/Deck";
import Player from "./components/Player";

import { setup } from "./redux/actionCreators";

const NUM_PLAYERS = 4;

const App = ({ players, setup }) => {
    useEffect(() => {
        setup(NUM_PLAYERS);
    }, []);

    if (players) {
        return (
            <div className="App">
                <Deck />
                {players.map((p, i) => (
                    <Player index={i} />
                ))}
            </div>
        );
    } else return <div>Loading game...</div>;
};

const mapStateToProps = (state) => {
    return { players: state.players };
};

export default connect(mapStateToProps, { setup })(App);
