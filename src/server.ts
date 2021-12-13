import "reflect-metadata";
import "express-async-errors";
require('dotenv').config()
import helmet from 'helmet'


import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";

const app = express();

const serverPort = process.env.PORT

app.use(express.json());
app.use(helmet())
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(serverPort, () => {
  console.log(`Server running at port ${serverPort} 🚀🚀🚀`);
});