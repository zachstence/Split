import "./App.css";

import Card from "./components/Card";
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
            <Card rank={4} suit={"Heart"} />
        </div>
    );
};

export default App;
