import React from "react";

import suitEnum from "../enums/suit";

import "./Card.css";

const Card = ({ card, faceUp, onDiscard }) => {
    const getColor = () => {
        if (!card) return "";
        if (card.suit === suitEnum.heart || card.suit === suitEnum.diamond)
            return "red";
        else if (card.suit === suitEnum.club || card.suit === suitEnum.spade)
            return "black";
        else return "";
    };
    return (
        <div className={`Card ${getColor()}`} onClick={onDiscard}>
            {faceUp ? (
                <>
                    <div className="rank-top">{card.rank}</div>
                    <div className="suit">{card.suit}</div>
                    <div className="rank-bottom">{card.rank}</div>
                </>
            ) : (
                <div className="card-back" />
            )}
        </div>
    );
};

export default Card;
