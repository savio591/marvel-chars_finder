import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../ApiContext";

import "../styles/pages.css";

export function Pages() {
  const { pages, queries } = useContext(ApiContext);
  const { searchQuery, pageQuery } = queries;

  // Converts the total number of characters in pagination
  const pagination = parseInt((pages + 1 * 10) / 10 + 1);

  // pagination mapping for the buttons
  const pagingMap = [];
  for (let i = 1; i < pagination; i++) {
    pagingMap.push(i);
  }

  // Default pagination is 1 if don't have a page query.
  // When in the query isn't a page query, will return a NaN
  // instead a number, so the const page will parse this rule:
  const page = isNaN(pageQuery) ? 1 : pageQuery;

  // Page offset
  let pagingOffset = 3;
  if (pageQuery > 3) {
    pagingOffset = pageQuery;
  }

  /* Query generator */
  const query = (p: number) => {
    const searchQueryForParam =
      searchQuery === null || "" ? "" : "findChar=" + searchQuery;
    const pageQueryForParam = isNaN(pageQuery || p) ? "" : "page=" + p;
    return "./?" + searchQueryForParam + "&" + pageQueryForParam;
  };

  const arrowsLeftClassOff = (n: number) => n <= 1;
  const arrowsRightClassOff = (n: number) => n >= pagination - 1;

  return (
    <>
      <nav className="pages">
        <div className="pages_arrows">
          <Link
            to={query(1)}
            hidden={arrowsLeftClassOff(pageQuery > 3 ? 2 : 1)}
          >
            <button>
              <i className="icon_chevrons-left"></i>
            </button>
          </Link>
          <Link to={query(page - 1)} hidden={arrowsLeftClassOff(page)}>
            <button>
              <i className="icon_chevron-left"></i>
            </button>
          </Link>
        </div>
        <div className="pages_n">
          {pagingMap
            .slice(pagingOffset - 3, pagingOffset + 2)
            .map((p: number) => {
              let selected = "";
              if (p === page) selected = "btn_selected";
              return (
                <Link to={query(p)} key={p}>
                  <button className={selected}>{p}</button>
                </Link>
              );
            })}
        </div>
        <div className="pages_arrows">
          <Link to={query(page + 1)} hidden={arrowsRightClassOff(page)}>
            <button>
              <i className="icon_chevron-right"></i>
            </button>
          </Link>
          <Link
            to={query(pagination - 1)}
            hidden={arrowsRightClassOff(page + 1)}
          >
            <button>
              <i className="icon_chevrons-right"></i>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
