import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Character from "./models/Character";

import FindCharacters from "./services/findCharacters";
import queryParser from "./services/queryParser";

interface ContextModel {
  chars?: Character[];
  pages?: number;
  queries?: {
    searchQuery: string;
    pageQuery: number;
  };
}

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiContext = createContext<ContextModel>({});

export function ApiProvider({ children }: ApiProviderProps) {
  const { search } = useLocation();
  const { searchQuery, pageQuery } = queryParser(search);
  const [chars, setChars] = useState<Character[]>([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    FindCharacters(searchQuery, pageQuery).then((data) => {
      setChars(data.characters);
      setPages(data.totalOfPages);
    });
  }, []);

  return (
    <ApiContext.Provider
      value={{ chars, pages, queries: { searchQuery, pageQuery } }}
    >
      {children}
    </ApiContext.Provider>
  );
}
