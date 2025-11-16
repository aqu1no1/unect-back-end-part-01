import { Response, Request } from "express";
import { FilterQuery } from "mongoose";
import dayjs from "dayjs";
import logger from "../utils/logger";
import { Student } from "../schema/student.schema";
import IStudent from "../models/student.models";

//Criar um aluno
export const createStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.create({
      ...req.body,
      createdAt: dayjs().toDate(),
      updatedAt: dayjs().toDate(),
    });
    logger.info(student);
    return res.status(201).json(student);
  } catch (error) {
    logger.error(error);
    return res.status(400).json({ error: "Error ao criar um aluno" });
  }
};

//Listar todos os alunos
export const getStudents = async (req: Request, res: Response) => {
  const { ra, name } = req.query;
  const filter: FilterQuery<IStudent> = {};

  if (ra) {
    filter.ra = ra;
  }

  if (name) {
    filter.name = name;
  }
  try {
    const allStudents = await Student.find(filter);
    logger.info(allStudents);
    return res.status(200).json(allStudents);
  } catch (error) {
    logger.error(error);
    return res.status(400).json({ error: "Error ao buscar todos os alunos" });
  }
};

//Buscar um aluno pelo ID
export const getByIdStudent = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).send("Aluno não encontrado");
    }

    logger.info(student);

    return res.status(200).json(student);
  } catch (error) {
    logger.error(error);
    return res.status(400).json({ error: "Error ao buscar um aluno pelo Id" });
  }
};

//Atualizar um aluno pelo ID
export const updateStudent = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, {
      ...req.body,
      updatedAt: dayjs().toDate(),
    });

    if (!student) {
      return res.status(404).send("Esse Id não existe");
    }

    logger.info(student);
    return res.status(200).json(student);
  } catch (error) {
    logger.error(error);
    return res
      .status(400)
      .json({ error: "Error ao atualizar um aluno pelo Id" });
  }
};

//Deletar um aluno pelo ID
export const deleteStudent = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).send("Esse Id do aluno não existe");
    }

    logger.info(deletedStudent);
    return res.status(200).send("Aluno deletado com sucesso!");
  } catch (error) {
    logger.error(error);
    return res.status(400).json({ error: "Erro ao deletar um aluno pelo Id" });
  }
};
