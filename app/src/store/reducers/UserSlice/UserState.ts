import { ILot, IUser } from 'src/models/IModels';

export interface UserState {
  currentUser: IUser;
  currentLots: ILot[];
  activeLots: ILot[];
  completedLots: ILot[];
  currentLot: ILot;
  isLoading: boolean;
  error: string;
  success: string;
}

export interface ILots {
  currentLots: ILot[];
  activeLots: ILot[];
  completedLots: ILot[];
}
