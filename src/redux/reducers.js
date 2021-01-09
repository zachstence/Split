import { combineReducers } from "redux";

const deck = (deck = [], action) => {
    switch (action.type) {
        case "SETUP":
            return action.payload.deck;
        case "DRAW_DECK":
            return deck.pop();
        default:
            return deck;
    }
};

const discarded = (discarded = [], action) => {
    switch (action.type) {
        case "SETUP":
            return action.payload.discarded;
        case "DISCARD":
            return [...discarded, action.payload];
        case "DRAW_DISCARDED":
            return discarded.splice(
                discarded.length - action.payload.numCards,
                action.payload.numCards
            );
        default:
            return discarded;
    }
};

const players = (players = [], action) => {
    switch (action.type) {
        case "SETUP":
            return action.payload.players;
        default:
            return players;
    }
};

export default combineReducers({ deck, discarded, players });
