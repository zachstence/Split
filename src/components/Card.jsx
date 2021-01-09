import React from "react";

import "./Card.css";

const Card = ({ rank, suit }) => {
    const getColor = () => {
        if (suit === "Heart" || suit === "Diamond") return "red";
        else return "black";
    };

    return (
        <div className={`Card ${getColor()}`}>
            <div className="card-proportion-wrapper">
                <div className="rank-top">{rank}</div>
                <div className="suit">{suit}</div>
                <div className="rank-bottom">{rank}</div>
            </div>
        </div>
    );
};

export default Card;
