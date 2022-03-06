export interface IUser {
  username: string;
  email: string;
  password: string;
  roles: string[];
}

export interface IRole {
  value: string;
}
