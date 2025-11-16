import Router from "express";
import {
  createStudent,
  getStudents,
  deleteStudent,
  getByIdStudent,
  updateStudent,
} from "../controllers/student.controller";

const router = Router();

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/:id", getByIdStudent);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
