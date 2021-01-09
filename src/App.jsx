import React, { useState, useEffect } from "react";

import "./App.css";

import Hand from "./components/Hand";
import Game from "./game/Game";
import Player from "./game/Player";

const NUM_PLAYERS = 2;

const App = () => {
    const [, updateState] = useState();
    const render = React.useCallback(() => updateState({}), []);
    const [players, setPlayers] = useState();

    useEffect(() => {
        const game = new Game(render);
        const p = Array(NUM_PLAYERS);
        for (let i = 0; i < NUM_PLAYERS; i++) {
            p[i] = new Player(game);
        }
        setPlayers(p);
    }, []);

    console.log(players);

    if (players) {
        return (
            <div className="App">
                <button type="button" onClick={() => players[0].draw()}>
                    Draw
                </button>
                <Hand playerNum={1} cards={players[0].hand} />
                <br />
                <button type="button" onClick={() => players[1].draw()}>
                    Draw
                </button>
                <Hand playerNum={2} cards={players[1].hand} />
            </div>
        );
    } else return <div>Loading game...</div>;
};

export default App;
