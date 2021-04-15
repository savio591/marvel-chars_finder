import "../styles/article.css";

export function Finder() {
  return (
    <>
      <article>
        <h1>Busca de personagens</h1>
        <h2>Nome do personagem</h2>
        <form className="search">
          <input
            type="search"
            name="findChar"
            id="findChar"
            placeholder="Search"
          />
          <button type="submit">
            <i className="icon_search"></i>
          </button>
        </form>
        <section className="characters">
          <div className="types">
            <h3>Personagem</h3>
            <h3>Séries</h3>
            <h3>Eventos</h3>
          </div>

          <div className="cards">
            <div className="card">
              <div className="chars">
                <img src="./assets/1.png" alt="Imagem de Abner Jenkins" />
                <p>Abner Jenkins</p>
              </div>
              <div className="series">
                <p>Iron Man: Armor Wars</p>
                <p>Old Man Hawkeye</p>
                <p>Fantastic Four Visionaires: Walter Simonson Vol.1</p>
              </div>
              <div className="events">
                <p>AvX</p>
                <p>Demon in the Bottle</p>
              </div>
            </div>
            <div className="card">
              <div className="chars">
                <img src="./assets/2.png" alt="Imagem de Amora" />
                <p>Amora</p>
              </div>
              <div className="series">
                <p>Iron Man: Armor Wars</p>
                <p>Old Man Hawkeye</p>
                <p>Fantastic Four Visionaires: Walter Simonson Vol.1</p>
              </div>
              <div className="events">
                <p>AvX</p>
                <p>Demon in the Bottle</p>
              </div>
            </div>
            <div className="card">
              <div className="chars">
                <img src="./assets/3.png" alt="Imagem de Barry Norman osborn" />
                <p>Barry Norman Osborn</p>
              </div>
            </div>
            <div className="card">
              <div className="chars">
                <img src="./assets/4.png" alt="Bill Foster" />
                <p>Bill Foster</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
