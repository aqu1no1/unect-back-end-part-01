import express from "express";
import dotenv from "dotenv";
import logger from "./utils/logger";
import connect from "./utils/connect";
import router from "./routes/student.router";
import { setupSwagger } from "./utils/swagger";

dotenv.config();

const app = express();

setupSwagger(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/aluno", router);

app.listen(process.env.PORT, async () => {
  logger.info("Server is running");

  await connect();
});
