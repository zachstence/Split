class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    getColor = () => {
        if (this.suit === "Heart" || this.suit === "Diamond") return "red";
        else return "black";
    };
}

export default Card;
