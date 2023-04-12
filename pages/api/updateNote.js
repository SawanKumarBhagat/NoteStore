import Note from "../../models/Note.js";
import connectDb from "@/middleware/mongoose.js";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let n = await Note.findByIdAndUpdate(req.body._id, {
      title: req.body.title,
      body: req.body.body,
      date: new Date().toDateString(),
    });
    await n.save();
    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({ error: "Bad Request" });
  }
};

export default connectDb(handler);