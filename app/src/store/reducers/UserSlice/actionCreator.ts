/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { $host } from 'src/http';
import { IDataWS } from 'src/models/IWS';
import { IAdminForm, IRegistrForm, IResetForm } from 'src/models/IForms';
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

      const { firstname, lastname, phone, email, id, roles, lots } =
        response.data.user;

      return { firstname, lastname, phone, email, id, roles, lots };
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

export const authUser = createAsyncThunk('auth', async (_, thunkAPI) => {
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
      const { img, start, finish } = data;

      const startDate = new Date(start!);
      const finishDate = new Date(finish!);

      const startDateTime = startDate.getTime();
      const finishDateTime = finishDate.getTime();
      const currentDate = new Date().getTime();

      if (currentDate >= startDateTime || startDateTime >= finishDateTime)
        return 'Please, select correct time';

      const file =
        typeof img !== 'string' && img ? await handleFileRead(img[0]) : '';

      const response = await $host.post('/admin/create', {
        ...data,
        img: file,
        start: startDate,
        finish: finishDate,
      });

      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as AxiosError).response?.data.message
      );
    }
  }
);

export const getLots = createAsyncThunk('getLots', async (_, thunkAPI) => {
  try {
    const response = await $host.get('/auction/lots');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      (error as AxiosError).response?.data.message
    );
  }
});

export const setLot = createAsyncThunk(
  'setLot',
  async (id: string, thunkAPI) => {
    try {
      const response = await $host.get(`/auction/lots/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as AxiosError).response?.data.message
      );
    }
  }
);

export const resetUserPass = createAsyncThunk(
  'registrUser',
  async (data: IResetForm, thunkAPI) => {
    try {
      const { email, password } = data;
      const response = await $host.put('auth/reset', { email, password });

      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as AxiosError).response?.data.message
      );
    }
  }
);

export const setMessage = createAsyncThunk(
  'setMessage',
  async (data: string) => data
);

export const clearCurrentLot = createAsyncThunk(
  'clearCurrentLot',
  async () => null
);

export const updateLot = createAsyncThunk(
  'updateLot',
  async (data: IDataWS) => data
);

export const removeLots = createAsyncThunk(
  'removeLots',
  async (data: string[], thunkAPI) => {
    try {
      const response = await $host.delete('auction/lots', { data });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as AxiosError).response?.data.message
      );
    }
  }
);

export const setActiveLots = createAsyncThunk(
  'setActiveLots',
  async (data: string[], thunkAPI) => {
    try {
      const response = await $host.put('auction/lots', { data });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as AxiosError).response?.data.message
      );
    }
  }
);
