import React from "react";
import { useLocation } from "react-router-dom";

import { Header } from "../components/Header";
import { Finder } from "../components/Finder";
import { Pages } from "../components/Pages";

import "../styles/main.css";
import "../styles/icons.css";


export function Home() {
  return (
    <>
      <Header />
      <Finder />
      <Pages />
    </>
  );
}
