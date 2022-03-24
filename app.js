const express = require('express');
const bodyParser = require('body-parser');
// const cookieSession = require("cookie-session");
// var Keygrip = require("keygrip");

const logIn = require('./route/login');




const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs")
app.use(
  cookieSession({
    name: "session",
    keys: new Keygrip(
      ["ThisIsThe09OFirstKey#!!$nonoyeah", "thisISSSSNOTTHEFIRSTKEY@@!!"],
      "SHA384",
      "base64"
    ),
  })
);

app.get('/', (req, res) => {
    app.get("/", (req, res) => {
        if (req.session.isNew) {
          const theSessionIsNew = true;
          ttamp;
          res.render("homePage");
        } else {
          const theSessionIsNew = false;
          const useNameOfTheLoggedInUser = req.session.uname;
          res.render("homePage", {useNameOfTheLoggedInUser});
        }
    })
})



app.use("/", homepage);
app.use("/logIn", logIn);




module.exports = app;