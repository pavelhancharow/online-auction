import { ILot } from '../interfaces/IModels';

export const filterLots = (lots: ILot[]) => {
  const currentLots = lots.filter((item) => !item.active && !item.completed);
  const activeLots = lots.filter((item) => item.active && !item.completed);
  const completedLots = lots.filter((item) => !item.active && item.completed);

  return { currentLots, activeLots, completedLots };
};
