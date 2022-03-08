import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { $host } from 'src/http';
import { IRegistrForm } from 'src/models/IForms';

export const registrUser = createAsyncThunk(
  'registrUser',
  async (data: IRegistrForm, thunkAPI) => {
    try {
      const response = await $host.post('auth/registration', { ...data });

      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as AxiosError).response?.data.message
      );
    }
  }
);

export const clearMessages = createAsyncThunk('clearMessages', async () => '');

export const setUser = createAsyncThunk(
  'setUser',
  async (
    data: { email: string; password: string; remember: boolean },
    thunkAPI
  ) => {
    try {
      const response = await $host.post('auth/login', {
        email: data.email,
        password: data.password,
      });

      if (data.remember) localStorage.setItem('token', response.data.token);

      const { firstname, lastname, phone, email, id, roles } =
        response.data.user;

      return { firstname, lastname, phone, email, id, roles };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as AxiosError).response?.data.message
      );
    }
  }
);

export const logOut = createAsyncThunk('logOut', async () => {
  localStorage.removeItem('token');
});

export const auth = createAsyncThunk('auth', async (_, thunkAPI) => {
  try {
    const response = await $host.get('/auth/auth', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    return response.data.user;
  } catch (error) {
    localStorage.removeItem('token');
    return thunkAPI.rejectWithValue(
      (error as AxiosError).response?.data.message
    );
  }
});
