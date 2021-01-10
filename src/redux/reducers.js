import { combineReducers } from "redux";

const cards = (state = {}, action) => {
    if (action.payload === undefined) return state;

    switch (action.type) {
        case "SETUP": {
            const { deck, discarded, players } = action.payload;
            return {
                deck: deck,
                discarded: discarded,
                players: players,
            };
        }
        case "DRAW_DECK": {
            const { deck, players } = state;
            const player = action.payload;

            const newDeck = [...deck];
            const toDraw = newDeck.pop();

            const newPlayers = [...players];
            newPlayers[player].hand = [...newPlayers[player].hand, toDraw];

            return {
                ...state,
                deck: newDeck,
                players: newPlayers,
            };
        }
        case "DRAW_DISCARDED": {
            const { discarded, players } = state;
            const { player, numCards } = action.payload;

            const newDiscarded = [...discarded];
            const toDraw = newDiscarded.splice(
                newDiscarded.length - numCards,
                numCards
            );

            const newPlayers = [...players];
            newPlayers[player].hand = [...newPlayers[player].hand, ...toDraw];

            return {
                ...state,
                discarded: newDiscarded,
                players: newPlayers,
            };
        }
        default:
            return state;
    }
};

export default combineReducers({ cards });
