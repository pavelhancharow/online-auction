import { ILot, IUser } from 'src/models/IModels';

export interface UserState {
  currentUser: IUser;
  currentLots: ILot[];
  currentLot: ILot;
  isLoading: boolean;
  error: string;
  success: string;
}
