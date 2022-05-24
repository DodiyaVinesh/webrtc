const app = require("express")();
var server = app.listen(3000);

var io = require("socket.io")(server, {
  cors: { origin: "http://localhost:4200", methods: ["GET", "POST"] },
});

io.on("connection", (client) => {
  client.on("send-message", (payload) => {
    client.broadcast.emit("message", payload);
  });
});
