const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false,
});

const Page = db.define("posts", {
  //keys asociated with model properties

  title: { type: Sequelize.STRING, allowNull: false },
  slug: { type: Sequelize.STRING, allowNull: false },
  content: { type: Sequelize.TEXT, allowNull: false },
  status: Sequelize.ENUM('open', 'closed'), //enum w two args, open and closed.
});

const User = db.define("users", {
  //
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, validate: { isEmail: true }},
});

module.exports = {
  db,
  Page,
  User,
};
