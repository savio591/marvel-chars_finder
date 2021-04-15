import "../styles/pages.css";

export function Pages() {
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
