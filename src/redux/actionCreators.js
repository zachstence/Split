import Game from "../game/Game";
import Player from "../game/Player";

export const setup = () => {
    const game = new Game();
    const players = Array(2);
    for (let i = 0; i < 2; i++) {
        players[i] = new Player(game);
    }

    return {
        type: "SETUP",
        payload: { game, players },
    };
};
