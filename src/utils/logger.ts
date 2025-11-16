import pino from "pino";

const log = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "HH:MM:ss",
    },
  },
});

export default log;
