import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import { postRouter } from "./apis/postApi.js";
import { connectDB } from "./config/connect.js";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();
const app = express();
app.use(cors());

connectDB();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/posts/", postRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port:${process.env.PORT.yellow}`);
});
