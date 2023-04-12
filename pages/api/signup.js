import connectDb from "@/middleware/mongoose.js";
import User from "@/models/User";
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10);
  if (req.method == "POST") {
    let n = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    await n.save();
    var token = jwt.sign(
      { email: req.body.email, name: req.body.name },
      "process.env.SECRET",
      { expiresIn: "2d" }
    );
    res.status(200).json({ success: "true", token });
  } else {
    res.status(400).json({ error: "Bad Request" });
  }
};

export default connectDb(handler);
