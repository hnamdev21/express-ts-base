interface IUser extends IBase {
  full_name: string;
  email: string;
  password: string;
  roleId: number;
}

export default IUser;
