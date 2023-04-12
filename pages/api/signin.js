import connectDb from "@/middleware/mongoose.js";
import User from "@/models/User.js";
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });
    if (
      user &&
      req.body.email == user.email &&
      bcrypt.compareSync(req.body.password, user.password)
    ) {
      var token = jwt.sign(
        { email: user.email, name: user.name },
        "process.env.SECRET",
        { expiresIn: "2d" }
      );
      res.status(200).json({ success: "true", token });
    } else {
      res.status(200).json({ success: "false", error: "Invalid Credentials" });
    }
  } else {
    res.status(400).json({ error: "Bad Request" });
  }
};

export default connectDb(handler);
