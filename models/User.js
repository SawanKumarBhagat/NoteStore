import mongoose from "mongoose";
import Note from "./Note";

// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, rquired: true },
    email: { type: String, rquired: true, unique: true },
    password: { type: String, rquired: true },
  },
  { timestamps: true }
);
mongoose.models = {};

export default mongoose.model("User", UserSchema);
// export const User = mongoose.models.User || mongoose.model("User", UserSchema);
