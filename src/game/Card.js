class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    getColor = () => {
        if (this.suit === "♥" || this.suit === "♦") return "red";
        else return "black";
    };
}

export default Card;
