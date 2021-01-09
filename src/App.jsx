import "./App.css";

import Card from "./components/Card";
import Deck from "./game/Deck";

const App = () => {
    const deck = new Deck();

    return (
        <div className="App">
            <Card rank={4} suit={"Heart"} />
        </div>
    );
};

export default App;
