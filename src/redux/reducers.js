import { combineReducers } from "redux";

const game = (game = null, action) => {
    switch (action.type) {
        case "SETUP":
            return action.payload.game;
        default:
            return null;
    }
};

const players = (players = [], action) => {
    switch (action.type) {
        case "SETUP":
            return action.payload.players;
        default:
            return null;
    }
};

export default combineReducers({ game, players });
