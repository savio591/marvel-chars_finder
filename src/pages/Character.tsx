import React from "react";

import { CharacterProvider } from "../CharacterContext";

import { CharacterDetails } from "../components/CharacterDetails";
import { Header } from "../components/Header";

import "../styles/main.css";
import "../styles/icons.css";

export function Character() {
  return (
    <CharacterProvider>
      <Header />
      <CharacterDetails />
    </CharacterProvider>
  );
}
