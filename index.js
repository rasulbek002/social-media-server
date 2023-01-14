// External dependencies
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import getPosts from "./router/getPosts.js";
import { getPost } from "./controllers/posts.js";
import getPostRouter from "./router/getPost.js";

const app = express();

dotenv.config();

app.use(cors());

app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

app.use("/posts", getPosts);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Server is running on PORT: ${PORT}`
      )
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set();
