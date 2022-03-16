import { WebSocket } from 'ws';

export interface CustomWS extends WebSocket {
  id?: string;
}

export enum DataActionTypes {
  CONNECTION = 'CONNECTION',
  MESSAGE = 'MESSAGE',
}

export interface DataAction {
  type: DataActionTypes;
  payload: { lotId: string; userId: string; rate?: number };
}
