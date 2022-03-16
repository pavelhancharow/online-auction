import { ILot } from './IModels';

export interface IDataWS {
  lot?: ILot;
  message: string;
}

export enum ActionWSTypes {
  CONNECTION = 'CONNECTION',
  MESSAGE = 'MESSAGE',
}

interface IActionWSCONNECTION {
  type: ActionWSTypes.CONNECTION;
  payload: { lotId: string; userId: string };
}

interface IActionWSMessage {
  type: ActionWSTypes.MESSAGE;
  payload: { lotId: string; userId: string; rate: number };
}

export type IActionWS = IActionWSCONNECTION | IActionWSMessage;
