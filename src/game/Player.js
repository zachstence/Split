const NUM_STARTING_CARDS = 9;

class Player {
    game = null;
    hand = [];
    pairs = [];

    constructor(game) {
        this.game = game;

        for (let i = 0; i < NUM_STARTING_CARDS; i++) {
            this.draw();
        }
    }

    draw = () => {
        this.hand.push(this.game.draw());
    };

    discard = (i) => {
        const toDiscard = this.hand.splice(i, 1);
        this.game.discard(toDiscard);
    };
}

export default Player;
