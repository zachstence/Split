import rankEnum from "../enums/rank";
import suitEnum from "../enums/suit";

export const setup = (numPlayers) => {
    // create deck with cards
    const deck = [];
    Object.values(rankEnum).forEach((rank) => {
        Object.values(suitEnum).forEach((suit) => {
            deck.push({ rank, suit, id: 0 });
            deck.push({ rank, suit, id: 1 });
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

    // create players, each dealt 9 cards from deck
    const players = Array(numPlayers);
    for (let i = 0; i < players.length; i++) {
        players[i] = { hand: deck.splice(deck.length - 9, 9), pairs: [] };
    }

    // discard top card in deck for game start
    const discarded = [deck.pop()];

    return {
        type: "SETUP",
        payload: { deck, discarded, players },
    };
};

export const drawFromDeck = (player) => {
    return {
        type: "DRAW_DECK",
        payload: player,
    };
};

export const drawFromDiscarded = (player, numCards) => {
    return {
        type: "DRAW_DISCARDED",
        payload: { player, numCards },
    };
};

export const discard = (player, cardIndex) => {
    console.log("discard");
    return {
        type: "DISCARD",
        payload: { player, cardIndex },
    };
};
