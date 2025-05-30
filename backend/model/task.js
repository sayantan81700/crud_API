import mongoose from "mongoose";
const taskSchem = new mongoose.Schema({
  text: { type: String, required: true },
});
const task = mongoose.model("task", taskSchem);
export default task;
