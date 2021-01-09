import React from "react";
import { connect } from "react-redux";

import Hand from "./Hand";

import "./Player.css";

const Player = ({ index, hand }) => {
    return (
        <div className="Player">
            <button type="button" onClick={() => {}}>
                Draw
            </button>
            <button type="button" onClick={() => {}}>
                Discard
            </button>
            <Hand playerNum={index + 1} cards={hand} faceUp={true} />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { hand: state.players[ownProps.index].hand };
};
export default connect(mapStateToProps)(Player);
