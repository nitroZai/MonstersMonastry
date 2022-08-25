import React, { Component } from "react";
import CardContainer from "./card-container/card-container.component";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          // return <h2 key={monster.id}>{monster.name}</h2>;

          const {
            name: monsterName,
            id: monsterId,
            email: monsterEmail,
          } = monster;

          return (
            <CardContainer
              monsterName={monsterName}
              monsterId={monsterId}
              monsterEmail={monsterEmail}
            ></CardContainer>
          );
        })}
      </div>
    );
  }
}

export default CardList;
