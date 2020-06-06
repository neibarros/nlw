import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("Listagens de usuários");

  res.json(["Nei", "Diego", "Cleiton", "Robson"]);
});

app.listen(3333);
