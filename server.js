const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const Flashcard = require("./database/models/flashcardModel");
const PORT = process.env.PORT || 3000;

app.get("/home",(req,res) => {
  res.send(":)");
});

app.get("*", (req,res) => {
  res.redirect("home");
});

server.listen(PORT,() => {
  console.log("litening at port " + PORT);
});
