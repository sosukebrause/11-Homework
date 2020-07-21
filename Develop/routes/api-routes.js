const express = require("express");
const util = require("util");
const fs = require("fs");
const router = express.Router();

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
