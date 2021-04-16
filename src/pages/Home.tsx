import React from "react";

import { ApiContext, ApiProvider } from "../ApiContext";

import { Header } from "../components/Header";
import { Finder } from "../components/Finder";
import { Pages } from "../components/Pages";

import "../styles/main.css";
import "../styles/icons.css";

export function Home() {
  return (
    <ApiProvider>
      <Header />
      <Finder />
      <Pages />
    </ApiProvider>
  );
}
