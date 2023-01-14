// External dependencies
import express from "express";

// Local dependencies
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/posts.js";

const getPostsRouter = express.Router();

getPostsRouter.get("/", getPosts);
getPostsRouter.get("/:id", getPost);
getPostsRouter.post("/", createPost);
getPostsRouter.patch("/:id", updatePost); 
getPostsRouter.delete("/:id", deletePost)
  
export default getPostsRouter;
