// requerede package
const express = require("exoress");
const fetch = require("node-fetch");
require("dotenv").config();

// create the express server

const app = express();

// server port number

const PORT = process.env.PORT || 3000;

// set template engine
app.set("view engine", 'ejs')
app.use(express.static("public"));

// start the server 
app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
})