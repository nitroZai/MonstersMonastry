import React, { Component } from "react";
import "./card-container.styles.css";

class CardContainer extends Component {
  render() {
    const { monsterId, monsterName, monsterEmail } = this.props;

    return (
      <div className="card-container" key={monsterId}>
        {/* Using String interpolation below */}
        <img
          src={`https://robohash.org/${monsterId}?set=set2&size=200x200`}
          alt={`Monster ${monsterName}`}
        />
        <h2>{monsterName}</h2>
        <p>{monsterEmail}</p>
      </div>
    );
  }
}

export default CardContainer;
