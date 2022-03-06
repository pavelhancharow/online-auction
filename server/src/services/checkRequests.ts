import { email, password, username } from '../validation/requests';

export const checkRegistration = () => [username, password, email];
export const checkLogin = () => [password, email];
