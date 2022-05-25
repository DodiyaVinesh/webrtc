const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;
const app = express();
const server = app.listen(port);

var io = require("socket.io")(server, {
  cors: { origin: "http://localhost:4200", methods: ["GET", "POST"] },
});

io.on("connection", (client) => {
  client.on("send-message", (payload) => {
    console.log(payload);
    client.broadcast.emit("message", payload);
  });
});

app.use(express.json());

app.use(express.static(__dirname + "/client/dist/client"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/client/dist/client/index.html"));
});

app.listen(port, () => {
  console.log("Listning to port " + port);
});
