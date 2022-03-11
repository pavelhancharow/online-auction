export interface ILot {
  _id: string;
  title: string;
  description: string;
  img: string;
  duration: string;
  rate: number;
}

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  roles: string[];
}
