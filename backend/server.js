const express = require("express");

const app = express();
const port = 5000 || process.env.PORT;

app.get("/orders", (req, res) => {
  res.send("Your orders are here");
});

app.listen(port, console.log(`server running on port ${port}`));
