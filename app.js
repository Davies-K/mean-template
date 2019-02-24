require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const rateLimit = require('express-rate-limit');
const expresJwt = require("express-jwt");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const path = require('path');

const generalUtils = require("./api/general/util");

const app = express();

const limiter = new rateLimit({
    windowMs: 15 * 60 * 1000, // set window to 15 minutes
    max: 100,
    delayMs: 0 // don't require a delay disabled
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './build')));

app.use(cookieParser());
app.use(limiter);
app.use(helmet());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './build/index.html')));

app.use("/api/users", require("./api/users"));
app.use("/api/auth", require("./api/authenticate"));

app.use(generalUtils.checkJwt);
app.use(generalUtils.attachUser);

// Everything to start the applications
async function connect() {
    try {
        await mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});
    } catch(e) {
        console.log("Mongoose connection error ", e);
    }
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
};

connect();
