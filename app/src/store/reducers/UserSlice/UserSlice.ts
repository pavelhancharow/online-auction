import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { CurrentLotInit, CurrentUserInit } from 'src/data/CurrentInit';
import { ILot, IUser } from 'src/models/IModels';
import {
  authUser,
  clearCurrentLot,
  clearMessages,
  createLot,
  getLots,
  logOut,
  registrUser,
  setLot,
  setMessage,
  setUser,
  updateLot,
} from './actionCreator';

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
    [authUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [authUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.error = '';
      state.currentUser = action.payload;
    },
    [authUser.rejected.type]: (state, action: PayloadAction<string>) => {
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
    [setLot.pending.type]: (state) => {
      state.isLoading = true;
    },
    [setLot.fulfilled.type]: (state, action: PayloadAction<ILot>) => {
      state.isLoading = false;
      state.error = '';
      state.currentLot = action.payload;
    },
    [setLot.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [setMessage.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.success = action.payload;
    },
    [clearMessages.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.success = action.payload;
      state.error = action.payload;
    },
    [logOut.fulfilled.type]: (state) => {
      state.currentUser = CurrentUserInit;
      state.currentLot = CurrentLotInit;
    },
    [clearCurrentLot.fulfilled.type]: (state) => {
      state.currentLot = CurrentLotInit;
    },
    [updateLot.fulfilled.type]: (
      state,
      action: PayloadAction<{ lot: ILot; message: string }>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.success = action.payload.message;
      state.currentLot = action.payload.lot;
    },
  },
});

export default UserSlice.reducer;
