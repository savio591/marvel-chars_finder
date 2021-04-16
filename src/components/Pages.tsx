import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../ApiContext";

import "../styles/pages.css";

export function Pages() {
  const { pages, queries } = useContext(ApiContext);
  const { searchQuery, pageQuery } = queries;

  // Receber o total:
  // Mapear o total em decimais 21 = 3
  // Renderizar os números da paginação.
  // Marcar a página selecionada como mark, o número selecionado estará

  const pagination = parseInt((pages + 1 * 10) / 10 + 1);
  console.log(pagination);

  const pagingMap = [];
  let pagingOffset = 3;

  if (pageQuery > 3) {
    pagingOffset = pageQuery;
  }
  for (let i = 1; i < pagination; i++) {
    pagingMap.push(i);
  }
  const query = (p: number) => {
    const searchQueryForParam =
      searchQuery === null || "" ? "" : "findChar=" + searchQuery;
    const pageQueryForParam = isNaN(pageQuery || p) ? "" : "page=" + p;

    return "/?" + searchQueryForParam + "&" + pageQueryForParam;
  };

  return (
    <>
      <nav className="pages">
        <div className="pages_n">
          {pagingMap
            .slice(pagingOffset - 3, pagingOffset + 2)
            .map((p: number) => {
              let selected = "";
              if (p === queries.pageQuery) selected = "btn_selected";
              return (
                <Link to={query(p)} key={p}>
                  <button className={selected}>{p}</button>
                </Link>
              );
            })}
        </div>
        <div className="pages_arrows">
          <Link to={query(pageQuery + 1)}>
            <button>
              <i className="icon_chevron-right"></i>
            </button>
          </Link>
          <Link to={query(pagingMap.length)}>
            <button>
              <i className="icon_chevrons-right"></i>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
