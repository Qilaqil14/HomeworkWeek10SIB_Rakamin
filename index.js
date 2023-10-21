const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const multer = require('multer')
const path = require("path");

const morgan = require('morgan')
const moviesRouter = require('./src/routes/movies.js')
const usersRouter = require('./src/routes/users.js');

app.use("/upload", express.static(path.join(__dirname, "./src/upload")));



require("dotenv").config

app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
app.use("/movies",moviesRouter);
app.use("/users",usersRouter);




const port = process.env.PORT
app.listen(port, () => console.log(`server is running in port ${port}...`))
