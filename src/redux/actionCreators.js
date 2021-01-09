import rankEnum from "../enums/rank";
import suitEnum from "../enums/suit";

export const setup = () => {
    const players = Array(2);
    for (let i = 0; i < 2; i++) {
        players[i] = { hand: [], pairs: [] };
    }

    // create deck with cards
    const deck = [];
    Object.values(rankEnum).forEach((rank) => {
        Object.values(suitEnum).forEach((suit) => {
            deck.push({ rank, suit });
            deck.push({ rank, suit });
        });
    });

    // shuffle deck
    var j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = deck[i];
        deck[i] = deck[j];
        deck[j] = x;
    }

    // discard top card in deck for game start
    const discarded = deck.pop();

    return {
        type: "SETUP",
        payload: { deck, discarded, players },
    };
};
