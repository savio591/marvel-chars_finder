import { useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import "../styles/header.css";
import "../styles/details.css";

import { CharacterContext } from "../CharacterContext";

import Character from "../models/Character";

interface ParamsTypes {
  charId: string;
}

export function CharacterDetails() {
  const { character } = useContext(CharacterContext);

  try {
    return (
      <>
        <div className="backButton">
          <button
            onClick={() => {
              history.back();
              return false;
            }}
          >
            Voltar
          </button>
        </div>
        <div className="detailsContainer">
          <div className="main">
            <div className="nameImgDesc">
              <h1>{character.name}</h1>
              <img
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
              ></img>
              <p className="description">{character.description}</p>
            </div>
            <div className="comics">
              <h2>{character.comics.available + " Quadrinhos"}</h2>
              <div className="comicsCard">
                {character.comics.items.map((ch) => {
                  return <p key={ch.name}>{ch.name}</p>;
                })}
              </div>
            </div>
            <div className="series">
              <h2>{character.series.available + " Series"}</h2>
              <div className="seriesCards">
                {character.series.items.map((ch) => {
                  return <p key={ch.name}>{ch.name}</p>;
                })}
              </div>
            </div>
            <div className="events">
              <h2>{character.events.available + " Eventos"}</h2>
              <div className="eventsCards">
                {character.events.items.map((st) => {
                  return <p key={st.name}>{st.name}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (err) {
    return (
      <>
        <button
          onClick={() => {
            history.back();
            return false;
          }}
        >
          Voltar
        </button>
      </>
    );
  }
}
