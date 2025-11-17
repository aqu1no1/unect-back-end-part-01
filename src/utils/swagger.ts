import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

export const setupSwagger = (app: Application) => {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API de Alunos",
        version: "1.0.0",
        description: "Documentação da API utilizando Swagger",
      },
    },
    apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
  };

  const swaggerSpec = swaggerJsdoc(options);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
