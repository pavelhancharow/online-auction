import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentUserInit } from 'src/data/CurrentUserInit';
import { IUser } from 'src/models/IUser';
import {
  auth,
  clearMessages,
  logOut,
  registrUser,
  setUser,
} from './actionCreator';

interface UserState {
  currentUser: IUser;
  isLoading: boolean;
  error: string;
  registration: string;
}

const initialState: UserState = {
  currentUser: CurrentUserInit,
  isLoading: false,
  error: '',
  registration: '',
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
      state.registration = action.payload;
    },
    [registrUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.registration = '';
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
    [clearMessages.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.registration = action.payload;
      state.error = action.payload;
    },
    [logOut.fulfilled.type]: (state) => {
      state.currentUser = CurrentUserInit;
    },
  },
});

export default UserSlice.reducer;
