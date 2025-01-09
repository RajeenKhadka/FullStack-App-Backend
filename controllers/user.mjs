import User from "../models/user.mjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

async function create(req, res) {
  try {
    //add the user to the database
    const createdUser = await User.create(req.body);
    //create a JWT token
    //token will be a string
    const token = createJWT(createdUser);
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    //Query the database to find a user with the email provided
    const user = await User.findOne({ email: req.body.email });
    //if the email does not exist, throw an error
    if (!user) throw new Error("User Not Found");
    //if we find the user, compare the password
    //but remember it is stored encrypted
    //1st arguement is from the credentals that the user typed in
    //2nd arguement is what is stored in the database
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error("Bad password");
    const token = createJWT(user);
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

//====================== Helper Function ========================

function createJWT(user) {
  return jwt.sign(
    //data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

export default { create, login };
