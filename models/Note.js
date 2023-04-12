import mongoose from "mongoose";

// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const NoteSchema = new mongoose.Schema({
  title: String,
  body: String,
  email: String,
  date: String,
});
mongoose.models = {};

export default mongoose.model("Note", NoteSchema);