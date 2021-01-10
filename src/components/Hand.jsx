import React from "react";
import Card from "./Card";

import "./Hand.css";

const Hand = ({ cards, faceUp }) => {
    const renderCards = () => {
        return cards.map((card) => {
            return (
                <Card
                    key={`${card.rank}${card.suit}${card.id}`}
                    card={card}
                    faceUp={faceUp}
                />
            );
        });
    };
    return (
        <div className="Hand">
            <div className="cards">{renderCards()}</div>
        </div>
    );
};

export default Hand;
