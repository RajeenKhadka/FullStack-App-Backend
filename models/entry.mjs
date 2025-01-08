import mongoose from "mongoose";

const entrySchema = new mongoose.Schema(
  {
    user: String,
    label: String,
    startDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    startTime: {
      type: String,
    },
    duration: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

//indexes
entrySchema.index({ startDate: 1 });

export default mongoose.model("Entry", entrySchema);
