import { ILot, IUser } from 'src/models/IModels';

export const CurrentLotInit: ILot = {
  _id: '',
  title: '',
  description: '',
  img: '',
  start: '',
  active: false,
  completed: false,
  rate: NaN,
  currentUser: '',
};

export const CurrentUserInit: IUser = {
  id: '',
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  roles: [],
};
