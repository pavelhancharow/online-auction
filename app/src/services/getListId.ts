import { IListFutureForm } from 'src/models/IForms';

export const getListId = (data: IListFutureForm) => {
  const result = [];

  for (const key in data) {
    if (data[key]) result.push(key);
  }

  return result;
};
