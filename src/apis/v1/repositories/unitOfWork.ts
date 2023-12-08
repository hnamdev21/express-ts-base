import { Pool, PoolConnection } from "mysql2/promise";
import { IUserRepo } from "../repoInterfaces";
import UserRepository from "./user.repository";

class UnitOfWork {
  private pool: Pool;
  public userRepository: IUserRepo;

  constructor(pool: Pool) {
    this.pool = pool;
    this.userRepository = new UserRepository(pool);
  }

  async transaction<T>(callback: (connection: PoolConnection) => Promise<T>): Promise<T> {
    const connection = await this.pool.getConnection();

    try {
      await connection.beginTransaction();
      const result = await callback(connection);
      await connection.commit();

      return result;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }
}

export default UnitOfWork;
