import * as fs from 'fs/promises';
import path from 'path';
import { IBodyLot } from '../../interfaces/IAdminService';
import { Lot } from '../../models/Lot';

export const createService = async (body: IBodyLot) => {
  if (!body.img) {
    const pathImg = path.resolve(__dirname, '../../assets', 'auction.png');

    const file = await fs.readFile(pathImg, { encoding: 'base64' });

    return new Lot({ ...body, img: 'data:image/png;base64,' + file });
  }

  return new Lot({ ...body });
};
