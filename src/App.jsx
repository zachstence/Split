import "./App.css";

import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <Card rank={4} suit={"Club"} />
        </div>
    );
}

export default App;
