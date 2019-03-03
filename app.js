require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const path = require('path');

// const {promisify} = require('util');
// const getAsync = promisify(client.get).bind(client);

const generalUtils = require("./api/general/util");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const keys = require('./config/keys');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './build')));
app.use(cookieParser());
app.use(generalUtils.limiter);
app.use(helmet());

// SERVE THE APP
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './build/index.html')));

// APP ROUTES
app.use("/api/users", require("./api/users"));
app.use("/api/login", require("./api/authenticate"));

// AUTHENTICATION CHECK
app.use(generalUtils.checkJwt);
app.use(generalUtils.attachUser);

// AUTHENTICATED ROUTES

app.use("/api/logout", require("./api/logout"));

// OTHERS: NG HANDLED
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, './build/index.html')));

// EXCEPTION HANDLER
app.use(generalUtils.exceptionErrorHandler);

async function connect() {
    try {
        await mongoose.connect(keys.mongoURI, {useNewUrlParser: true});
    } catch(e) {
        console.log("Mongoose connection error ", e);
    }

    generalUtils.redis.on('error', (err) => console.log('Something went wrong ' + err));

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Example app listening on port 3000!'));
};

connect();

module.exports = app;