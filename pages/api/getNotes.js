import Note from "../../models/Note.js";
import connectDb from "@/middleware/mongoose.js";
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  const token = req.body.token;
  const data = jwt.verify(token, 'process.env.SECRET');
  let notes = await Note.find({ email: data.email });
  res.status(200).json({ notes });
};

export default connectDb(handler);
