// External dependencies
import mongoose from "mongoose";
// Local dependencies
import PostMessage from "../models/postMessage.js";

export async function getPosts(req, res) {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res
      .status(404)
      .json({ message: error.message });
  }
}

export async function createPost(req, res) {
  const post = req.body;
  console.log(req);

  console.log(post);

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(post);
  } catch (error) {
    res
      .status(409)
      .json({ message: error.message });
  }
}

export async function updatePost(req, res) {
  const { id: _id } = req.params;
  const body = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res
      .status(404)
      .send("No resourse exists with this id");

  const updatedPost =
    await PostMessage.findByIdAndUpdate(
      _id,
      body,
      {
        new: true,
      }
    );

  console.log(body);

  res.status(200).json(updatedPost);
}

export async function getPost(req, res) {
  const { id: _id } = req.params;
  console.log(_id);
  console.log("get post");

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res
      .status(404)
      .send("No resourse exists with this id");

  const item = await PostMessage.findById(_id);

  res.status(200).json(item);
}

export function deletePost(req, res) {
  const id = req.params.id;
  const filter = { _id: id };
  PostMessage.deleteOne(filter, (err, result) => {
    if (err) {
      res.status(500).send({
        error: "Error deleting item: " + err,
      });
    } else {
      res.send({
        message: "Item deleted successfully",
      });
    }
  });
}
