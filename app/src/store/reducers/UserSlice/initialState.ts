import { UserState } from './UserState';
import { CurrentLotInit, CurrentUserInit } from 'src/data/CurrentInit';

export const initialState: UserState = {
  currentUser: CurrentUserInit,
  currentLots: [],
  activeLots: [],
  completedLots: [],
  currentLot: CurrentLotInit,
  isLoading: false,
  error: '',
  success: '',
};
