require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT;

const app = express();

//config JSON and formData responses
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Solve cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Upload directory
app.use(express.static(path.join(__dirname, "./uploads")));

//DB connection
require("./config/db.js");

//routes
const routes = require("./routes/Router");
app.use(routes);

//initialization api
app.listen(port, () => {
  console.log(`App liste in port:  ${port}`);
});
