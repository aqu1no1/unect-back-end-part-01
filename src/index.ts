import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gy7gp98.mongodb.net/`
  )
  .then(() => {
    console.log("Server is running!!");
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));
