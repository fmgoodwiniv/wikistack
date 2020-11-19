const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const layout = require("./views/layout");
const { db, Page, User } = require("./models");
const wiki = require("./routes/wiki");
const users = require("./routes/users");

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(morgan("dev"));

app.use("/wiki", wiki);
app.use("/users", users);

app.get("/", (req, res) => {
  res.send(layout());
});





app.use(express.static(path.join(__dirname, "public")));

async function syncDb() {
  await db.sync({ force: true });
}

syncDb();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
