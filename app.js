const express = require('express');
const bodyParser = require('body-parser');
// const cookieSession = require("cookie-session");
// var Keygrip = require("keygrip");

const logIn = require('./route/login');




const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs")





app.use("/", homepage);
app.use("/logIn", logIn);




module.exports = app;