import { useLocation, useParams } from "react-router";

import SearchBox from "./SearchBox";
import Cards from "./Cards";

import "../../styles/article.css";

export function Finder() {
  
  return (
    <>
      <article>
        <h1>Busca de personagens</h1>
        <h2>Nome do personagem</h2>
        <SearchBox />
        <section className="characters">
          <div className="types">
            <h3>Personagem</h3>
            <h3>Séries</h3>
            <h3>Eventos</h3>
          </div>
          <Cards />
        </section>
      </article>
    </>
  );
}
