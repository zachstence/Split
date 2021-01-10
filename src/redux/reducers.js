import { combineReducers } from "redux";

const cards = (cards = {}, action) => {
    if (!action.payload) return cards;

    const { deck, discarded, players } = action.payload;
    switch (action.type) {
        case "SETUP":
            return {
                deck: deck,
                discarded: discarded,
                players: players,
            };
        case "DRAW_DECK":
            const { player } = action.payload;

            const newDeck = [...deck];
            const toDraw = newDeck.pop();

            const newPlayers = [...players];
            newPlayers[player].hand = [...newPlayers[player].hand, toDraw];
            return {
                deck: newDeck,
                players: newPlayers,
                discarded,
            };
        default:
            return cards;
    }
};

export default combineReducers({ cards });
