const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const multer = require('multer')
const path = require("path");
const cors = require('cors')

const morgan = require('morgan')
const moviesRouter = require('./src/routes/movies.js')
const usersRouter = require('./src/routes/users.js');
const { options } = require('./src/routes/movies.js');

app.use("/upload", express.static(path.join(__dirname, "./src/upload")));



require("dotenv").config

app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
app.use("/movies",moviesRouter);
app.use("/users",usersRouter);

// setup Cors
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));


const port = process.env.PORT
app.listen(port, () => console.log(`server is running in port ${port}...`))
