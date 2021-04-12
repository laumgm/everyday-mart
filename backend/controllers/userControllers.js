import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

//
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  
  const userExists = await User.findOne({ email });
  if (userExists){
    res.status(400).send('User already Exists');
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
    })
  } else {
    res.status(400).send('Invalid User Data');
  }
});

// Authenticate User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  //validate email and password first
  if (user) {
    //check if password matched
    if (await user.matchPassword(password)) {
      res.json({
        _id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      // res.status(201).send('Invalid Credentials');
      res.status(201);
      throw new Error('Invalid Credentials');
    }
  } else {
    // res.status(404).send('User does not Exist');
    res.status(404);
    throw new Error('User does not Exist');
  }
})
export {
  registerUser,
  loginUser,
  
}


