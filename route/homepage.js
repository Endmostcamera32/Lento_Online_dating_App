const express = require("express");
const router = express.Router();
const app = require("../app");
router.use(express.static("public"));
const database = require('../DataBaseStuff/databaseConnection');
const dbModel = require('../DataBaseStuff/databaseFunctions');


router.get("/", function(req, res) {
    dbModel.getAllPosts((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.render("homepage", {result})
        }
    })
})










module.exports = router;