import task from "../model/task.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await task.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
});
router.post("/", async (req, res) => {
  try {
    const newdata = await new task({ text: req.body.text });
    newdata.save();
    res.status(200).json({ message: "data saved" });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updated = await task.findByIdAndUpdate(req.params.id, {
      text: req.body.text,
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "data deleted" });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
});
export default router;
