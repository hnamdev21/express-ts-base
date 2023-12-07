import { Pool } from "mysql2/promise";
import { IUserRepo } from "../repoInterfaces";
import UserRepository from "./user.repository";

class UnitOfWork {
  private pool: Pool;
  public userRepository: IUserRepo;

  constructor(pool: Pool) {
    this.pool = pool;
    this.userRepository = new UserRepository(pool);
  }
}

export default UnitOfWork;
