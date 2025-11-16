import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "./utils/logger";
import connect from "./utils/connect";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.listen(process.env.PORT, async () => {
  logger.info("Server is running");

  await connect();
});
