import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";

import Hand from "./components/Hand";

import { setup } from "./redux/actionCreators";

const NUM_PLAYERS = 2;

const App = ({ players, setup }) => {
    useEffect(() => {
        setup();
    }, []);

    const renderPlayer = (i) => {
        const player = players[i];
        return (
            <>
                <button type="button" onClick={() => player.draw()}>
                    Draw
                </button>
                <button type="button" onClick={() => player.discard(0)}>
                    Discard
                </button>
                <Hand playerNum={i} cards={player.hand} />
                <br />
            </>
        );
    };

    if (players) {
        return (
            <div className="App">{players.map((p, i) => renderPlayer(i))}</div>
        );
    } else return <div>Loading game...</div>;
};

const mapStateToProps = (state) => {
    return { players: state.players };
};

export default connect(mapStateToProps, { setup })(App);
