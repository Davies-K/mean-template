import dotenv from "dotenv";
import express = require("express");
import mongoose = require("mongoose");

// body parser: https://github.com/types/npm-body-parser/blob/master/test/express.ts

// initialize configuration
dotenv.config();

const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

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
