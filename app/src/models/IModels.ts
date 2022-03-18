export interface ILot {
  _id: string;
  title: string;
  description: string;
  img: string;
  start: string;
  active: boolean;
  completed: boolean;
  rate: number;
  currentUser: string;
}

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  roles: string[];
}
