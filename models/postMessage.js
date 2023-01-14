import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  author: String,
  description: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model(
  "PostMessage",
  postSchema
);

export default PostMessage;
