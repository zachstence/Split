import React from "react";
import { connect } from "react-redux";

import Hand from "./Hand";
import { drawFromDeck, drawFromDiscarded } from "../redux/actionCreators";

import "./Player.css";

const Player = ({ index, hand, drawFromDeck, drawFromDiscarded }) => {
    return (
        <div className="Player">
            Player {index + 1}
            <br />
            <button type="button" onClick={() => drawFromDeck(index)}>
                Draw From Deck
            </button>
            <button type="button" onClick={() => drawFromDiscarded(index, 1)}>
                Draw 1 From Discard
            </button>
            <button type="button" onClick={() => drawFromDiscarded(index, 1)}>
                Draw 2 From Discard
            </button>
            <button type="button" onClick={() => drawFromDiscarded(index, 1)}>
                Draw 3 From Discard
            </button>
            <button type="button" onClick={() => {}}>
                Discard
            </button>
            <Hand cards={hand} faceUp={true} />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { hand: state.cards.players[ownProps.index].hand };
};
export default connect(mapStateToProps, { drawFromDeck, drawFromDiscarded })(
    Player
);
