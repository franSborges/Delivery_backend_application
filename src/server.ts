import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json("running")
})

app.listen(3000);