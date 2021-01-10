import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { discard } from "../redux/actionCreators";

import "./Hand.css";

const Hand = ({ player, cards, faceUp, discard }) => {
    const renderCards = () => {
        return cards.map((card, i) => {
            return (
                <Card
                    key={`${card.rank}${card.suit}${card.id}`}
                    card={card}
                    faceUp={faceUp}
                    onDiscard={() => discard(player, i)}
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

const mapStateToProps = (state, ownProps) => {
    return { cards: state.cards.players[ownProps.player].hand };
};

export default connect(mapStateToProps, { discard })(Hand);
