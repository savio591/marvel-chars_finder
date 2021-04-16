interface Query {
  searchQuery: string;
  pageQuery: number;
}

export default function queryParser(query: string): Query {
  const queryStarter = query.slice(1);
  const querySplitter = queryStarter.split("&");
  const searchIndex = querySplitter.findIndex((s) => s.includes("findChar="));
  const searchQuery =
    searchIndex === -1 ? null : querySplitter[searchIndex].slice(9);

  const pageIndex = querySplitter.findIndex((s) => s.includes("page="));
  const pageQuery = parseInt(
    pageIndex === -1 ? null : querySplitter[pageIndex].slice(5)
  );
  return {
    searchQuery,
    pageQuery,
  };
}
