import { Router } from "express";
import {
  createStudent,
  getStudents,
  getByIdStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Alunos
 *   description: API para gerenciamento de alunos
 */

/**
 * @swagger
 * /aluno:
 *   post:
 *     summary: Criar um estudante
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - age
 *               - ra
 *               - cpf
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               ra:
 *                 type: string
 *               cpf:
 *                 type: string
 *     responses:
 *       201:
 *         description: Estudante criado com sucesso
 *       400:
 *         description: Erro ao criar estudante
 */
router.post("/", createStudent);

/**
 * @swagger
 * /aluno:
 *   get:
 *     summary: Listar todos os alunos
 *     tags: [Alunos]
 *     parameters:
 *       - in: query
 *         name: ra
 *         schema:
 *           type: string
 *         description: Filtrar aluno por RA
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtrar aluno por nome
 *     responses:
 *       200:
 *         description: Lista de alunos retornada com sucesso
 *       400:
 *         description: Erro ao buscar alunos
 */
router.get("/", getStudents);

/**
 * @swagger
 * /aluno/{id}:
 *   get:
 *     summary: Buscar um aluno pelo ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do aluno
 *     responses:
 *       200:
 *         description: Dados do aluno retornados com sucesso
 *       404:
 *         description: Aluno não encontrado
 *       400:
 *         description: Erro ao buscar aluno
 */
router.get("/:id", getByIdStudent);

/**
 * @swagger
 * /aluno/{id}:
 *   patch:
 *     summary: Atualizar um aluno pelo ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Aluno atualizado com sucesso
 *       404:
 *         description: Aluno não encontrado
 *       400:
 *         description: Erro ao atualizar aluno
 */
router.patch("/:id", updateStudent);

/**
 * @swagger
 * /aluno/{id}:
 *   delete:
 *     summary: Deletar um aluno pelo ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Aluno deletado com sucesso
 *       404:
 *         description: Aluno não encontrado
 *       400:
 *         description: Erro ao deletar aluno
 */
router.delete("/:id", deleteStudent);

export default router;
