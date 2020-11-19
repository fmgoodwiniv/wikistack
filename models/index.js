const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');



const Page = db.define('posts', {
	//keys asociated with model properties

	title: Sequelize.STRING,
	slug: Sequelize.STRING, 
	content: Sequelize.STRING, //should this be text?
	status: Sequelize.STRING, //enum w two args, open and closed.
});

const User = db.define('users', {
	//
	name: Sequelize.STRING,
	email: Sequelize.STRING,
});

module.exports = {
  db,
  Page, 
  User
};