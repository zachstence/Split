import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

import "./Deck.css";

const Deck = ({ discarded }) => {
    const renderDrawPile = () => {
        return <Card faceUp={false} />;
    };

    const renderDiscarded = () => {
        return discarded.map((card) => {
            return <Card card={card} faceUp={true} />;
        });
    };

    return (
        <div className="Deck">
            <div className="draw-pile">{renderDrawPile()}</div>
            <div className="discard-row">{renderDiscarded()}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { discarded: state.discarded };
};

export default connect(mapStateToProps)(Deck);
