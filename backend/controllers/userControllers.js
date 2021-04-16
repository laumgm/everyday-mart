import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

// Register a user
// PATH /api/user/register
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  
  const userExists = await User.findOne({ email });
  if (userExists){
    res.status(400)
    throw new Error('User already Exists');
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid User Data');
  }
});

// Authenticate User
// PATH /api/user/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  //validate email and password first
  if (user) {
    //check if password matched
    if (await user.matchPassword(password)) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })

    } else {
      res.status(404)
      throw new Error('Invalid Credentials');

    }
  } else {
    res.status(404)
    throw new Error('User does not exist');
  }
})
export {
  registerUser,
  loginUser,
  
}


