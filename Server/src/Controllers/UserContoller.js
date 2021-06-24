const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const userAuth = require("../MiddleWares/Auth");
const UserController = {};

UserController.register = async (req, res, next) => {
  const { username, email, password, isAdmin } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      res.status(400);
      return res.send({ error: "User already exists" });
    }
    const newUser = new User({
      username,
      email,
      password,
      isAdmin,
    });
    user = await newUser.save();
    //create payload to JWT
    const payload = {
      user: {
        id: user._id,
        isAdmin: user.isAdmin,
      },
    };
    console.log(payload);
    const secret = process.env.JWT_SECRET;
    const expire = process.env.JWT_EXPIRATION;
    jwt.sign(payload, secret, { expiresIn: expire }, (err, token) => {
      if (err) throw err;
      res.status(200);
      return res.send({
        username: user.username,
        id: user._id,
        isAdmin: user.isAdmin,
        token: token,
      });
    });
    // return res.send({ user });
  } catch (err) {
    res.status(500);

    return res.send({ error: "server error" });
  }
};
UserController.getUser = async (req, res) => {
  try {
    console.log(req.user.id,"id");
    let users = await User.findById({_id:req.user.id});
    res.status(200);
    return res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500);
    return res.send({ error: "server error" });
  }
};
UserController.login = async (req, res, next) => {
  //username,password request
  console.log(req.body);
  const { email, password } = req.body;
  //check username and password
  try {
    let user = await User.findOne({ email });
    if (!user) {
      res.status(401);
      return res.json({ errors: "Invalid email" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401);
      return res.json({ errors: "Invalid password" });
    }
    //of ok,then create JWT as Stateless
    else {
      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
          isAdmin: user.isAdmin,
        },
      };
      const secret = process.env.JWT_SECRET;
      const expire = process.env.JWT_EXPIRATION;
      const token = await jwt.sign(payload, secret, { expiresIn: expire });
      console.log(user);
      res.status(200);

      return res.json({
        username: user.username,
        id: user._id,
        isAdmin: user.isAdmin,
        token: token,
      });
      // const secret=process.env.JWT_SECRET;
      // const expire=process.env.JWT_EXPIRATION;

      // const token=jwt.sign({_id:user._id},secret,{expiresIn:expire});
      // return res.send({token});
    }
  } catch (e) {
    next(e);
  }
};
module.exports = UserController;
