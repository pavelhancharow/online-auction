import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentUserInit } from 'src/data/CurrentUserInit';
import { ILot } from 'src/models/ILot';
import { IUser } from 'src/models/IUser';
import {
  auth,
  clearMessages,
  createLot,
  getLots,
  logOut,
  registrUser,
  setUser,
} from './actionCreator';

interface UserState {
  currentUser: IUser;
  currentLots: ILot[];
  isLoading: boolean;
  error: string;
  success: string;
}

const initialState: UserState = {
  currentUser: CurrentUserInit,
  currentLots: [],
  isLoading: false,
  error: '',
  success: '',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [registrUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registrUser.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = '';
      state.success = action.payload;
    },
    [registrUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.success = '';
      state.error = action.payload;
    },
    [setUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [setUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.error = '';
      state.currentUser = action.payload;
    },
    [setUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [auth.pending.type]: (state) => {
      state.isLoading = true;
    },
    [auth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.error = '';
      state.currentUser = action.payload;
    },
    [auth.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getLots.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getLots.fulfilled.type]: (state, action: PayloadAction<ILot[]>) => {
      state.isLoading = false;
      state.error = '';
      state.currentLots = action.payload;
    },
    [getLots.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [createLot.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createLot.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = '';
      state.success = action.payload;
    },
    [createLot.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.success = '';
      state.error = action.payload;
    },
    [clearMessages.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.success = action.payload;
      state.error = action.payload;
    },
    [logOut.fulfilled.type]: (state) => {
      state.currentUser = CurrentUserInit;
    },
  },
});

export default UserSlice.reducer;
