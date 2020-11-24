const express = require("express");
const app = express();
const path = require("path");
const api = require("./server/routes/Api.js");

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", api);

const port = 3000;
app.listen(port, () => console.log(`Server Is Up And Runing On port ${port}`));
