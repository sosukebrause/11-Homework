const express = require("express");
const util = require("util");
const fs = require("fs");
const router = express.Router();

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

router.get("/notes", async (req, res) => {
  let file = JSON.parse(await readFileAsync("./db/db.json", "utf8"));
  res.json(file);
  // console.log("api hit for get notes");
});

router.post("/notes", async (req, res) => {
  const data = JSON.parse(await readFileAsync("./db/db.json", "utf8"));
  newItem = req.body;
  // console.log(newItem);
  newItem.id = data.length + 1;
  // console.log(newItem.id);
  data.push(newItem);
  await writeFileAsync("./db/db.json", JSON.stringify(data, null, 2));
  res.json(data);
  // console.log("api hit to post note");
});

router.delete("/notes/:id", async (req, res) => {
  const data = JSON.parse(await readFileAsync("./db/db.json", "utf8"));
  const noteID = parseInt(req.params.id);

  console.log(data);
  const filteredData = data.filter((notes) => notes.id !== noteID);

  console.log(filteredData);
  await writeFileAsync("./db/db.json", JSON.stringify(filteredData, null, 2));
  res.json(filteredData);
});

module.exports = router;
