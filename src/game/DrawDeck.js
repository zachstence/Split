import rankEnum from "../enums/rank";
import suitEnum from "../enums/suit";
import Card from "./Card";

class DrawDeck {
    constructor() {
        this.generateDeck();
        this.shuffleDeck();
    }

    generateDeck = () => {
        const deck = [];

        Object.values(rankEnum).forEach((rank) => {
            Object.values(suitEnum).forEach((suit) => {
                deck.push(new Card(rank, suit));
                deck.push(new Card(rank, suit));
            });
        });

        this.deck = [...deck];
    };

    shuffleDeck = () => {
        var j, x, i;
        for (i = this.deck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = x;
        }
    };

    draw = () => {
        return this.deck.pop();
    };
}

export default DrawDeck;
