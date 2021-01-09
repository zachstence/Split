import "./App.css";

import Card from "./components/Card";
import Game from "./game/Game";

const App = () => {
    const game = new Game();
    game.setup();

    return (
        <div className="App">
            <Card rank={4} suit={"Heart"} />
        </div>
    );
};

export default App;
