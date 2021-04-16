import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

import { ApiContext } from "../../ApiContext";

import Card from "./Card";

export default function Cards() {
  const { chars } = useContext(ApiContext);
  return (
    <>
      <div className="cards">
        {chars.map((c) => (
          <Card key={c.id} char={c} />
        ))}
      </div>
    </>
  );
}
