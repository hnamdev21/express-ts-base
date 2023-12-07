import { IBaseRepo } from "../repoInterfaces";
import { Pool, RowDataPacket } from "mysql2/promise";

abstract class BaseRepository<T extends RowDataPacket[]> implements IBaseRepo<T> {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  public async getAll(): Promise<T[]> {
    const [rows] = await this.pool.query<T[]>("SELECT * FROM ??", [this.getTableName()]);
    return rows;
  }

  public async getOne(id: string): Promise<T> {
    const [rows] = await this.pool.query<T[]>("SELECT * FROM ?? WHERE id = ?", [this.getTableName(), id]);
    return rows[0];
  }

  public async create(data: T): Promise<boolean> {
    const [result] = await this.pool.query("INSERT INTO ?? SET ?", [this.getTableName(), data]);
    return (result as RowDataPacket).affectedRows > 0;
  }

  public async update(id: string, data: T): Promise<boolean> {
    const [result] = await this.pool.query("UPDATE ?? SET ? WHERE id = ?", [this.getTableName(), data, id]);
    return (result as RowDataPacket).affectedRows > 0;
  }

  public async delete(id: string): Promise<boolean> {
    const [result] = await this.pool.query("DELETE FROM ?? WHERE id = ?", [this.getTableName(), id]);
    return (result as RowDataPacket).affectedRows > 0;
  }

  protected abstract getTableName(): string;
}

export default BaseRepository;
