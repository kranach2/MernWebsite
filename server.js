const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path= require("path");
const usersRouter = require("./routes/users");
const userauthenticationRouter = require("./routes/userauthentication");
const commentsRouter = require("./routes/comments")

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);
app.use("/userauthentication", userauthenticationRouter);
app.use("/comments", commentsRouter);

 const uri = process.env.ATLAS_URI;
 mongoose.connect(uri, {
  useNewUrlParser: true,
     useCreateIndex: true,
    useUnifiedTopology: true
  })
   .then(() => {
    console.log("Db connected");
   })
   .catch(err => {
     console.log(err);
   });

 const connection = mongoose.connection;
 connection.once("open", () => {
   console.log("Mongodb database is connected");
});

 if(process.env.NODE_ENV === "production"){
   app.use(express.static("client/build"));

  app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  
 });
 }



app.listen(port, () => {
  console.log(`The server is running in port ${port}`);
});