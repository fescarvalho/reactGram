const express = require("express");
const router = express();

//Routes
router.use("/backend/users", require("./UserRoutes"));

//tester
router.get("/", (req, res) => {
  res.send("API Working");
});

module.exports = router;
