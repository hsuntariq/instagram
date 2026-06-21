import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    caption: {
      type: String,
      required: false,
    },
    media: {
      type: String,
      required: false,
    },
    filter: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Post = mongoose.model("post", postSchema);
