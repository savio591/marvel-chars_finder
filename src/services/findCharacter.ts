import md5 from "md5";

import api from "./api";
import marvelApi from "../keys/marvelApi.json";

import Character from "../models/Character";
import MarvelData from "../models/MarvelData";

interface Response {
  data: MarvelData;
}

export default async function FindCharacter(
  charId: string
): Promise<Character | null> {
  let character: Character = new Object;

  const params = {
    apikey: marvelApi.public,
    ts: Date.now(),
    hash: md5(Date.now() + marvelApi.private + marvelApi.public),
  };

  await api
    .get("./characters/" + charId, {
      params,
    })
    .then((response: Response) => {
      const data = response.data;
      const characterData = data.data.results[0];
      character = characterData;
    });
  return character || null;
}
