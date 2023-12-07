import { Request, Response } from "express";
import AppService from "../services/app.service";
import { statusCodes } from "@/constants";
import generateId from "@/utils/generateId";

class UserController {
  constructor(private appService: AppService) {}

  public getUser = async (req: Request, res: Response) => {
    try {
      const result = await this.appService.unitOfWork.userRepository.getAll();

      if (result.length === 0) {
        return res.status(statusCodes.NOT_FOUND).json({ message: "No users found", data: [] });
      }

      return res.status(statusCodes.OK).json({ message: "Success", data: result });
    } catch (error) {
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  };

  public createUser = async (req: Request, res: Response) => {
    const data = req.body;

    try {
      const result = await this.appService.unitOfWork.userRepository.create({
        ...data,
        id: generateId(16),
        created_at: new Date(),
        updated_at: new Date(),
      });

      return res.status(statusCodes.CREATED).json({ message: "Success", data: result });
    } catch (error) {
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  };

  public updateUser = async (req: Request, res: Response) => {
    const data = req.body;

    try {
      const result = await this.appService.unitOfWork.userRepository.update(data.id, {
        ...data,
        updated_at: new Date(),
      });

      return res.status(statusCodes.OK).json({ message: "Success", data: result });
    } catch (error) {
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const result = await this.appService.unitOfWork.userRepository.delete(id);

      return res.status(statusCodes.OK).json({ message: "Success", data: result });
    } catch (error) {
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  };
}

export default UserController;
