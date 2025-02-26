import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express, { json } from "express";
import helmet from "helmet";
import { opportunityRouter } from "./routes/opportunity.routes";
import { HandleErrors } from "./middlewares/handleErrors.middleware";
import { userRouter } from "./routes/user.routes";
import cors from "cors"

export const app = express();

console.log(process.env.EXAMPLE);

app.use(helmet());

app.use(cors())

app.use(json());

app.use("/opportunities", opportunityRouter);

app.use("/users", userRouter);

app.use(HandleErrors.execute);
