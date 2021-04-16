export default function SearchBox() {
  const empty = () => {
    const value = document.getElementById("findChar").value
    if (value == "") {
      event.preventDefault()
      return false;
    }
  };
  return (
    <>
      <form className="search">
        <input
          type="search"
          name="findChar"
          id="findChar"
          placeholder="Search"
        />
        <button type="submit" onClick={empty}>
          <i className="icon_search"></i>
        </button>
      </form>
    </>
  );
}
