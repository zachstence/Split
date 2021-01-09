import DrawDeck from "./DrawDeck";

class Game {
    players = [];
    deck = null;
    discard = [];

    setup = () => {
        this.deck = new DrawDeck();
        this.discard.push(this.deck.draw());
        console.log(this.deck);
    };
}

export default Game;
