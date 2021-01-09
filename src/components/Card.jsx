import React from "react";

import Card from "../game/Card";

import "./Card.css";

const CardComp = ({ card }) => {
    return (
        <div className={`Card ${card.getColor()}`}>
            <div className="card-proportion-wrapper">
                <div className="rank-top">{card.rank}</div>
                <div className="suit">{card.suit}</div>
                <div className="rank-bottom">{card.rank}</div>
            </div>
        </div>
    );
};

export default CardComp;
