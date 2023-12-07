import { IUser } from "../interfaces";
import IBaseRepo from "./IBaseRepo";

interface IUserRepo extends IBaseRepo<IUser> {}

export default IUserRepo;
