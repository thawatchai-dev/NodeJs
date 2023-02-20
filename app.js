const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = process.env.PORT;
const productsRouter = require("./src/router/productsRouter");

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.render("index", { username: "TWC", customers: ["Thon", "Teen", "Gone"] });
});

app.listen(port, () => {
  debug("Listening on port: %d", port);
});
