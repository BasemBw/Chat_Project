const User = require("../models/userModel");
const Config = require("../config/generateToken");

const userRegister = async (req, res) => {
  const { name, email, password, image } = req.body;

  if (!name || !email || !password) {
    res.status(400).json("Please Enter All The Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json("User is Already Exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    image,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      token: Config.generateToken(user._id),
    });
  } else {
    res.status(400).json("Failed To Create The User");
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (user && user.checkPassword(password)) {

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      token: Config.generateToken(user._id),
    });

  } else {

    res.status(401).json("Invalid Email or Password")

  }
};

const getAllUsers = async (req, res) => {
  const users = await User.find();

  return res.send(users);
};

module.exports = {
  userRegister,
  userLogin,
  getAllUsers,
};
