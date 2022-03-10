import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { $host } from 'src/http';
import { IAdminForm, IRegistrForm } from 'src/models/IForms';
import { handleFileRead } from 'src/services/handleFileRead';

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

export const createLot = createAsyncThunk(
  'createLot',
  async (data: IAdminForm, thunkAPI) => {
    try {
      const { img, duration } = data;

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const date = new Date(duration!).getTime();
      const currentDate = new Date().getTime();

      if (currentDate >= date) return 'Please, select future time';

      const file =
        typeof img !== 'string' && img ? await handleFileRead(img[0]) : '';

      const response = await $host.post('/admin/create', {
        ...data,
        img: file,
      });

      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as AxiosError).response?.data.message
      );
    }
  }
);
