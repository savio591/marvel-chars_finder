export default function SearchBox() {

  return (
    <>
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
    </>
  );
}
