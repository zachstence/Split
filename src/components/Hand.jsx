import React from "react";
import Card from "./Card";

import "./Hand.css";

const Hand = ({ playerNum, cards }) => {
    const renderCards = () => {
        return cards.map((card) => {
            return <Card card={card} />;
        });
    };
    return (
        <div className="Hand">
            <div className="playerNum">Player {playerNum}</div>
            <div className="cards">{renderCards()}</div>
        </div>
    );
};

export default Hand;
