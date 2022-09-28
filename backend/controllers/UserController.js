const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { mongoose } = require("mongoose");
const jwtSecret = process.env.JWT_SECRET;

//Generate token user
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

//Register user and sign in
const register = async (req, res) => {
  const { name, email, password } = req.body;

  //check if user exists
  const user = await User.findOne({ email });
  if (user) {
    res.status(422).json({ errors: ["Por favor, utilize outro email"] });
    return;
  }

  //Generate password hash
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  //Create User
  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  //If user successfully created, return the token
  if (!newUser) {
    res.status(422).json({ errors: ["Houve um erro, por favor, tente mais tarde."] });
    return;
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
  });
};

//Sing In
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  //Check for user exist
  if (!user) {
    res.status(404).json({ errors: ["Usuario não encontrado."] });
    return;
  }

  //Check password matches
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(422).json({ errors: ["Senha Invalida."] });
    return;
  }

  //Return this with token
  res.status(201).json({
    _id: user._id,
    profileImage: user.profileImage,
    token: generateToken(user._id),
  });
};

//Get current logged in user
const getCurrentUser = (req, res) => {
  const user = req.user;

  res.status(200).json(user);
};

//Update a user
const update = async (req, res) => {
  const { name, password, bio } = req.body;
  let profileImage = null;

  if (req.file) {
    profileImage = req.file.filename;
  }

  const reqUser = req.user;

  const user = await User.findById(mongoose.Types.ObjectId(reqUser._id)).select(
    "-password",
  );

  if (name) {
    user.name = name;
  }

  if (password) {
    //Generate password hash
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    user.password = passwordHash;
  }

  if (profileImage) {
    user.profileImage = profileImage;
  }

  if (bio) {
    user.bio = bio;
  }

  await user.save();

  res.status(200).json(user);
};

// Get user by id

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(mongoose.Types.ObjectId(id)).select("-password");

    if (!user) {
      res.status(404).json({ errors: ["Usuario não encontrado."] });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ errors: ["Usuario não encontrado."] });
  }

  //Check if users exists
};

module.exports = {
  register,
  login,
  getCurrentUser,
  update,
  getUserById,
};
