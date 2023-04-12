import Note from "../../models/Note.js";
import connectDb from "@/middleware/mongoose.js";
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  const token = req.body.token;
  const data = jwt.verify(token, "process.env.SECRET");

  if (req.method == "POST") {
    let n = new Note({
      title: req.body.title,
      body: req.body.body,
      date: new Date().toDateString(),
      email: data.email,
    });
    await n.save();
    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "Bad Request" });
  }
};

export default connectDb(handler);
