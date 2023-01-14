// External dependencies
import express from "express";

// Local dependencies
import {
  createPost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/posts.js";

const getPostsRouter = express.Router();

getPostsRouter.get("/", getPosts);
getPostsRouter.get("/:id", getPost);
getPostsRouter.post("/", createPost);
getPostsRouter.patch("/:id", updatePost);

export default getPostsRouter;
