import { IUser } from "../interfaces";

class User implements IUser {
  public id: string;
  public full_name: string;
  public email: string;
  public password: string;
  public roleId: number;
  public created_at: Date;
  public updated_at: Date;

  constructor(
    id: string,
    full_name: string,
    email: string,
    password: string,
    roleId: number,
    created_at?: Date,
    updated_at?: Date
  ) {
    this.id = id;
    this.full_name = full_name;
    this.email = email;
    this.password = password;
    this.roleId = roleId;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();
  }
}

export default User;
