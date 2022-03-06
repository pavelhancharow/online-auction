import bcrypt from 'bcryptjs';
import { Role } from '../../models/Role';
import { User } from '../../models/User';
import { generateAccessToken } from '../../jwt/generateAccessToken';
import { UserType } from '../../interfaces/UserType';
import { IBodyLogin, IBodyRegistr } from '../../interfaces/IAuthService';

export const registrationService = async (body: IBodyRegistr) => {
  const { email, password, username } = body;

  const candidate = await User.findOne({ email });

  if (candidate) return false;

  const hashPassword = bcrypt.hashSync(password, 7);
  const userRole = await Role.findOne({ value: 'USER' });

  const user: UserType = new User({
    username,
    email,
    password: hashPassword,
    roles: [userRole?.value],
  });

  return user;
};

export const loginService = async (body: IBodyLogin) => {
  const { email, password } = body;

  const user = await User.findOne({ email });
  if (!user) return user;

  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) return false;

  const token = generateAccessToken(user._id, user.roles);
  return token;
};
