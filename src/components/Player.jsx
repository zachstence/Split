import React from "react";
import { connect } from "react-redux";

import Hand from "./Hand";
import { drawFromDeck } from "../redux/actionCreators";

import "./Player.css";

const Player = ({ index, hand, drawFromDeck }) => {
    console.log(`rendering player ${index + 1}`);
    return (
        <div className="Player">
            Player {index + 1}
            <br />
            <button type="button" onClick={() => drawFromDeck(index)}>
                Draw From Deck
            </button>
            <button type="button" onClick={() => {}}>
                Discard
            </button>
            <Hand cards={hand} faceUp={true} />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { hand: state.players[ownProps.index].hand };
};
export default connect(mapStateToProps, { drawFromDeck })(Player);
