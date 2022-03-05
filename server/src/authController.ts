import { Request, Response } from 'express';
import { Role } from './models/Role';
import { User } from './models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import config from './common/config';

const { SECRET_KEY } = config;

const generateAccessToken = (id: Types.ObjectId, roles: string[]) => {
  const payload = { id, roles };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
};

class AuthController {
  async registration(req: Request, res: Response) {
    try {
      const { email, password, username } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: 'User already exists' });
      }
      const hashPassword = bcrypt.hashSync(password, 7);

      const userRole = await Role.findOne({ value: 'USER' });

      const user = new User({
        username,
        email,
        password: hashPassword,
        roles: [userRole?.value],
      });

      await user.save();
      res.json({ message: 'User has been success created' });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Registration error' });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) {
        return res.status(400).json({ message: 'Wrong password entered' });
      }

      const token = generateAccessToken(user._id, user.roles);

      res.json({ token });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Login error' });
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'get Users error' });
    }
  }
}

export const controller = new AuthController();
