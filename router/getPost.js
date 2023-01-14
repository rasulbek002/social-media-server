// External dependencies
import express from "express";

// Local dependencies
import { getPost } from "../controllers/posts.js";

const getPostRouter = express.Router();

getPostRouter.get("/:id", getPost);

export default getPostRouter;
