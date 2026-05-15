const contactsRoutes = require("./routes/contacts");
const express = require("express");
const mongodb = require("./data/database");

const app = express();
app.use(express.json());
app.use("/contacts", contactsRoutes);
const port = 8080;

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on ${port}`);
    });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
