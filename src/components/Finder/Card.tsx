import React from "react";
import { Link } from "react-router-dom";

import Character from "../../models/Character";

interface Props {
  char: Character;
}

export default function Card(props: Props) {
  const character = props.char;

  return (
    <Link to={"/character/"+character.id}>
      <div className="card">
        <div className="chars">
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt={"Imagem de " + character.name}
          />
          <p>{character.name}</p>
        </div>
        <div className="series">
          {character.series.items.slice(0, 3).map((ch) => {
            return <p key={ch.name}>{ch.name}</p>;
          })}
        </div>
        <div className="events">
          {character.events.items.slice(0,3).map((st)=> {
            return <p key={st.name}>{st.name}</p>
          })}
        </div>
      </div>
    </Link>
  );
}