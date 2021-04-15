import { useLocation, useParams } from "react-router";

import SearchBox from "./SearchBox";
import Cards from "./Cards";

import "../../styles/article.css";

// interface SearchQueries {
//   findChar: string;
// }

// interface RequestParams {
//   search: SearchQueries;
// }

export function Finder() {
  const { search } = useLocation();

  const findCharQuery = search.slice(10);

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

          <Cards findChar={findCharQuery} />
        </section>
      </article>
    </>
  );
}
