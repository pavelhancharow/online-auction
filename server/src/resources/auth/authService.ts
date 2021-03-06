import bcrypt from 'bcryptjs';
import { Role, User } from '../../models';
import { generateAccessToken } from '../../jwt/generateAccessToken';
import { IBodyLogin, IBodyRegistr } from '../../interfaces/IAuthService';
import { IUser } from '../../interfaces/IModels';
import { ErrorException, ErrorCode } from '../../error';

export const registrationService = async (body: IBodyRegistr) => {
  const { email, password, firstname, lastname, phone } = body;

  const candidate = await User.findOne({ email });
  if (candidate) throw new ErrorException(ErrorCode.DuplicateEntityError);

  const hashPassword = bcrypt.hashSync(password, 7);

  const userRole = await Role.findOne({ value: 'USER' });
  if (!userRole) throw new ErrorException(ErrorCode.RoleEntityError);

  const user: IUser = new User({
    firstname,
    lastname,
    phone,
    email,
    password: hashPassword,
    lots: [],
    roles: [userRole.value],
  });

  return user;
};

export const loginService = async (body: IBodyLogin) => {
  const { email, password } = body;

  const user = await User.findOne({ email });
  if (!user) throw new ErrorException(ErrorCode.UserNotFound);

  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) throw new ErrorException(ErrorCode.WrongPassword);

  const token = generateAccessToken(user._id, user.roles);

  return { token, user };
};

export const authService = async (_id: string) => {
  const user = await User.findOne({ _id });
  if (!user) throw new ErrorException(ErrorCode.UserNotFound);

  const token = generateAccessToken(user._id, user.roles);

  return { token, user };
};

export const getUsersService = async () => {
  const users = await User.find();
  if (!users) throw new ErrorException(ErrorCode.UserNotFound);

  return users;
};

export const resetService = async (body: IBodyRegistr) => {
  const { email, password } = body;

  const user = await User.findOne({ email });
  if (!user) throw new ErrorException(ErrorCode.UserNotFound);

  if (user.roles[0] === 'ADMIN')
    throw new ErrorException(ErrorCode.NoAccessRights);

  const hashPassword = bcrypt.hashSync(password, 7);
  await user.updateOne({ password: hashPassword });

  return user;
};
