import express from "express";

import mongoose from "mongoose";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";
import verifyJwt from "./middleware/auth.js";

const app = express();
const port = 3000;

//middleware
app.use(express.json());

//middleware
app.use(verifyJwt);

//routes
app.use("/api/products", productRouter);

app.use("/api/user", userRouter);

//query param

// app.get("/users/:userId/books/:bookId", (req, res) => {
//   res.send(req.params);
// });..

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

mongoose
  .connect(
    "mongodb+srv://thilinalakhewage99:9mjz0WsiawMD757o@backenddb.czfxt.mongodb.net/Node-Express-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log(`app is running the port number : ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
