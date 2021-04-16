import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Character from "./models/Character";

import FindCharacter from "./services/findCharacter";

interface ContextModel {
    character?: Character;
  };

interface ApiProviderProps {
  children: ReactNode;
}

interface ParamsTypes {
  charId: string;
}

export const CharacterContext = createContext<ContextModel>({});

export function CharacterProvider({ children }: ApiProviderProps) {
  const { charId } = useParams<ParamsTypes>();
  const [char, setChar] = useState({});
  const context = {
    character: char
  }

  useEffect(() => {
    FindCharacter(charId).then((data) => {
      setChar(data);
    });
  }, []);

  console.log(context.character)

  return (
    <CharacterContext.Provider value={context}>
      {children}
    </CharacterContext.Provider>
  );
}
