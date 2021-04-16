import md5 from "md5";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ApiContext } from "../ApiContext";

import "../styles/pages.css";

export function Pages() {
  const { pages, queries } = useContext(ApiContext);

  

  // Receber o total:
  // Mapear o total em decimais 21 = 3
  // Renderizar os números da paginação.
  // Marcar a página selecionada como
  return (
    <>
      <nav className="pages">
        <div className="pages_n">
          <button className="btn_selected">1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div className="pages_arrows">
          <button>
            <i className="icon_chevron-right"></i>
          </button>
          <button>
            <i className="icon_chevrons-right"></i>
          </button>
        </div>
      </nav>
    </>
  );
}
