const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const productRouter = express.Router();

const app = express();
const port = process.env.PORT;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
  res.render("products", {
    products: [
      { title: "RTX4090", description: "การ์ดจอ RTX4090", price: "49900" },
      { title: "RTX4080", description: "การ์ดจอ RTX4080", price: "39900" },
      { title: "RTX4070", description: "การ์ดจอ RTX4070", price: "29900" },
      { title: "RTX4060", description: "การ์ดจอ RTX4060", price: "19900" },
    ],
  });
});

productRouter.route("/1").get((req, res) => {
  res.send("Hello World!! I'm Product 1");
});

app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.render("index", { username: "TWC", customers: ["Thon", "Teen", "Gone"] });
});

app.listen(port, () => {
  debug("Listening on port: %d", port);
});
