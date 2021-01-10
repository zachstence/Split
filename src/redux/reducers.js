import { combineReducers } from "redux";

const cards = (cards = {}, action) => {
    if (action.payload === undefined) return cards;

    switch (action.type) {
        case "SETUP": {
            const { deck, discarded, players } = action.payload;
            return {
                deck: deck,
                discarded: discarded,
                players: players,
            };
        }
        case "DRAW_DECK":
            const { deck, players } = cards;
            const player = action.payload;

            const newDeck = [...deck];
            const toDraw = newDeck.pop();

            const newPlayers = [...players];
            newPlayers[player].hand = [...newPlayers[player].hand, toDraw];

            return {
                ...cards,
                deck: newDeck,
                players: newPlayers,
            };
        default:
            return cards;
    }
};

export default combineReducers({ cards });
