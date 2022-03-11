import { ILot, IUser } from 'src/models/IModels';

export const CurrentLotInit: ILot = {
  _id: '',
  title: '',
  description: '',
  img: '',
  duration: '',
  rate: NaN,
};

export const CurrentUserInit: IUser = {
  id: '',
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  roles: [],
};
