const fs = require("fs");
const { get } = require("http");
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

const maxBalance = 15000
const priceCoin = 1000

server.post("/coins/transfer", (req, res) => {
  try {

    const { amount } = req.body;
    if (amount <= 0) {
      return res.status(400).json({message: "Error amount"})
    }

    if (amount * priceCoin > maxBalance) {
      return res.status(400).json({message: "Недостаточно средств"})
    }

    return res.status(200).json({message: 'Success'})

  } catch (error) {
    return res.status(500).json({ message: e?.message || "error" });
  }
});

server.use(router);

server.listen(8000, () => {
  console.log("server is running on 8000 port");
});
