const express = require("express");
const router = express();

//Routes
router.use("/api/users", require("./UserRoutes"));
router.use("/api/photos", require("./PhotoRouters"));

//tester
router.get("/", (req, res) => {
  res.send("API Working");
});

module.exports = router;
