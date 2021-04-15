import md5 from "md5";
import api from "./api";
import marvelApi from "../keys/marvelApi.json";

export default function FindCharacters(name, limit, offset) {
  let characters = {};

  const params = {
    apikey: marvelApi.public,
    ts: Date.now(),
    hash: md5(Date.now() + marvelApi.private + marvelApi.public),
  };

  api
    .get("./characters", {
      params,
    })
    .then((response) => {
      characters = response.data;
    }),
    [];
  console.log(characters);
  return characters;
}
