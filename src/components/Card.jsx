import React from "react";

import "./Card.css";

const Card = ({ rank, suit }) => {
    return (
        <div className="Card">
            <div className="card-proportion-wrapper">
                <div className="rank-top">{rank}</div>
                <div className="suit">{suit}</div>
                <div className="rank-bottom">{rank}</div>
            </div>
        </div>
    );
};

export default Card;
