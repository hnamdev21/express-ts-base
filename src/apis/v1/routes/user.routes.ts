import express from "express";
import UnitOfWork from "../repositories/unitOfWork";
import AppService from "../services/app.service";
import UserController from "../controllers/user.controller";
import pool from "../config/db.config";

const userRouter = express.Router();

const unitOfWork = new UnitOfWork(pool);
const appService = new AppService(unitOfWork);
const userController = new UserController(appService);

userRouter.get("/", userController.getUser);
userRouter.post("/", userController.createUser);
userRouter.put("/", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
