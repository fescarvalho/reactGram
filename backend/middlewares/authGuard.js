const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; //Bearer yy923984209823442

  //check if has a token
  if (!token) return res.status(401).json({ errors: ["Acesso Negado."] });
  req.user = await User.findById(verified.id).select("-password");

  next();
  //check if token is valid
  try {
    const verified = jwt.verify(token, jwtSecret);
  } catch (error) {
    res.status(401).json({ errors: ["Token Invalido."] });
  }
};

module.exports = authGuard;
