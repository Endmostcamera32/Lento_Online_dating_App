const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "dfkpczjgmpvkugnb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "mibran0egjvx7q73",
	password: "b8lrv1gcg1xlz1p3",
	database: "m06hmrfekrc02jbi",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "",
	database: "",
	port: 3306,
	multipleStatements: false,
	namedPlaceholders: true

};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;