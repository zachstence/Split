import DrawDeck from "./DrawDeck";
import Player from "./Player";

class Game {
    players = [];
    deck = null;
    discard = [];

    constructor(numPlayers) {
        for (let i = 0; i < numPlayers; i++) {
            this.players.push(new Player());
        }
    }

    setup = () => {
        this.deck = new DrawDeck();
        this.discard.push(this.deck.draw());
        console.log(this);
    };
}

export default Game;
