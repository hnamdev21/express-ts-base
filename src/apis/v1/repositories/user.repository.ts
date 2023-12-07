import BaseRepository from "./base.repository";
import { User } from "../models";
import { Pool, RowDataPacket } from "mysql2/promise";
import { tables } from "@/constants";

class UserRepository extends BaseRepository<User & RowDataPacket[]> {
  constructor(pool: Pool) {
    super(pool);
  }

  protected getTableName(): string {
    return tables.users;
  }
}

export default UserRepository;
