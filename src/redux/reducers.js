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
            console.log(numCards, toDraw);

            const newPlayers = [...players];
            newPlayers[player].hand = [...newPlayers[player].hand, ...toDraw];

            return {
                ...state,
                discarded: newDiscarded,
                players: newPlayers,
            };
        }
        case "DISCARD": {
            const { discarded, players } = state;
            const { player, cardIndex } = action.payload;

            const newPlayers = [...players];
            const newHand = [...newPlayers[player].hand];
            const toDiscard = newHand.splice(cardIndex, 1)[0];
            newPlayers[player].hand = newHand;

            const newDiscarded = [...discarded, toDiscard];

            return { ...state, discarded: newDiscarded, players: newPlayers };
        }
        default:
            return state;
    }
};

export default combineReducers({ cards });
