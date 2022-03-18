export interface ILoginForm {
  email?: string;
  password?: string;
  remember?: boolean;
}

export interface IRegistrForm {
  firstname?: string;
  lastname?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirm?: string;
}

export interface IResetForm {
  email?: string;
  password?: string;
  confirm?: string;
}

export interface IAdminForm {
  title?: string;
  description?: string;
  img?: FileList | string;
  start?: string;
  finish?: string;
  rate?: string;
}

export interface IListFutureForm {
  [index: string]: boolean;
}

export type IForm = ILoginForm & IRegistrForm & IResetForm & IAdminForm;
