const express = require("express");

const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const userRouter = require("./routes/user.route.js");
const Product = require("./models/product.model.js");

const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

//middleware
app.use(express.json());

//middleware
app.use(
  (req,res,next)=>{
    const header = req.header("Authorization");
    if(header != null){
      const token = header.replace("Bearer ","");
      jwt.verify(token, "random1234" , (err,decoded)=>{
        console.log(decoded);

        if(decoded != null){
          req.user = decoded;
        }
      });
    }
    next();
}
)

//routes
app.use("/api/products" , productRoute);

app.use("/api/user" , userRouter)


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
