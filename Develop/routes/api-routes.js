const express = require("express");
const util = require("util");
const fs = require("fs");
const router = express.Router();

const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

router.get("/notes", async (req, res) => {
  let file = JSON.parse(await readFileAsync("./db/db.json", "utf8"));
  res.json(file);
  console.log(file);
  console.log("api hit");
});

// router.get("api/notes", async (req, res) => {
//   const data = JSON.parse(await readFileAsync("../db/db.json", "utf8"))
//   res.json(data);
// });

module.exports = router;
