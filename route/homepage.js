const express = require("express");
const cookieSession = require("cookie-session");
const router = express.Router();
const app = require("../app");
router.use(express.static("public"));
const database = include('./DataBaseStuff/databaseConnection');
const dbModel = include('./DataBaseStuff/databaseFunctions');


router.get("/", function(req, res) {
    res.render("homepage");
})










module.exports = router;