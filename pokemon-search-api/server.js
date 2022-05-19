import express from "express";
import fetch from "node-fetch";
import format from "./format.js";

const app = express();
const port = 5000;

app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;

  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const formattedResult = format.formatSearchResult(data);
      res.set("Access-Control-Allow-Origin", "*");
      res.send(formattedResult);
    })
    .catch((error) => res.send(`Invalid id: ${id} with error: ${error}`));
});

app.listen(5000, () => console.log(`Listening on http://localhost:${port}/.`));
