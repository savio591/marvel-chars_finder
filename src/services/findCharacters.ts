import md5 from "md5";

import api from "./api";
import marvelApi from "../keys/marvelApi.json";

import Character from "../models/Character";
import MarvelData from "../models/MarvelData";

interface Response {
  data: MarvelData;
}

interface FindModel {
  characters: Character[];
  totalOfPages: number;
}

export default async function FindCharacters(
  name?: string,
  page?: number
): Promise<FindModel | null> {
  let characters = [];
  let totalOfPages = 0;

  const queryPage = typeof page === typeof 0 ? page * 10 - 10 : null;

  const params = {
    apikey: marvelApi.public,
    ts: Date.now(),
    hash: md5(Date.now() + marvelApi.private + marvelApi.public),
    limit: 10,
    offset: queryPage,
    nameStartsWith: name,
  };

  await api
    .get("./characters", {
      params,
    })
    .then((response: Response) => {
      const data = response.data;
      totalOfPages = data.data.total;
      characters = data.data.results;
    });

  return { characters, totalOfPages } || null;
}
