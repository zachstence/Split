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

export default App;
