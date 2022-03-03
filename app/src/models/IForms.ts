export interface ILoginForm {
  email: string;
  password?: string;
  remember?: boolean;
}

export interface IRegistrForm {
  name?: string;
  email: string;
  password?: string;
  confirm?: string;
}

export interface IResetForm {
  email: string;
}

export type IForm = ILoginForm & IRegistrForm & IResetForm;
