import "./App.css";

import Card from "./components/Card";
import Hand from "./components/Hand";
import Game from "./game/Game";
import Player from "./game/Player";

const NUM_PLAYERS = 2;

const App = () => {
    const game = new Game();

    const players = Array(NUM_PLAYERS);
    for (let i = 0; i < NUM_PLAYERS; i++) {
        players[i] = new Player(game);
    }

    console.log(game);
    console.log(players);

    return (
        <div className="App">
            <Hand playerNum={1} cards={players[0].hand} />
            <Hand playerNum={2} cards={players[1].hand} />
        </div>
    );
};

export default App;
