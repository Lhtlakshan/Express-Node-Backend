const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/post", (req, res) => {
  res.send("Post response");
});

app.put("/put", (req, res) => {
  res.send("put response");
});

app.delete("/delete", (req, res) => {
  res.send("delete response");
});


//query param

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

app.get(
  "/example/b",
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from B!");
  }
);

mongoose.connect(
  "mongodb+srv://thilinalakhewage99:9mjz0WsiawMD757o@backenddb.czfxt.mongodb.net/Node-Express-API?retryWrites=true&w=majority&appName=BackendDB"
).then(()=>{
  console.log("Connected to the database");
  app.listen(port, () => {
    console.log(`app is running the port number : ${port}`);
  });
}).catch(()=>{
  console.log("Connection failed");
});