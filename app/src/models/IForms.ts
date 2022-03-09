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
}

export interface IAdminForm {
  title?: string;
  description?: string;
  img?: string;
  duration?: string;
  rate?: string;
}

export type IForm = ILoginForm & IRegistrForm & IResetForm & IAdminForm;
