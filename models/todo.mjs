import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    user: String,
    text: {
      type: String,
      required: true,
    },
    completed: Boolean,
    due: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Todo", todoSchema);
