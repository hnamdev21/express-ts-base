import express from "express";
import userRouter from "./user.routes";

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);

export default rootRouter;
