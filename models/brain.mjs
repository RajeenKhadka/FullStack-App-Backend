import mongoose from "mongoose";

const brainSchema = new mongoose.Schema(
  {
    user: String,
    entryDate: {
      type: Date,
      required: true,
    },
    entryType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//indexes
brainSchema.index({ entryDate: 1 });

export default mongoose.model("Brain", brainSchema);
