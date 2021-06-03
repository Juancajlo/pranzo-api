const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

class Server {
  apiPaths = {
    auth: "/api/auth",
    accounts: "/api/accounts",
    orders: "/api/orders",
    dishes: "/api/dishes",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ limit: "100mb", extended: false }));
    this.app.use(bodyParser.json({ limit: "100mb" }));
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.auth, require("./routes/auth"));
    this.app.use(this.apiPaths.accounts, require("./routes/accounts"));
    this.app.use(this.apiPaths.orders, require("./routes/orders"));
    this.app.use(this.apiPaths.dishes, require("./routes/dishes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }
}

module.exports = Server;
