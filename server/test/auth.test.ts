import supertest from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { app } from '../src/app';
import { Role, User } from '../src/models';
import { generateAccessToken } from '../src/jwt/generateAccessToken';

let userId = new mongoose.Types.ObjectId();

const userObject = {
  email: 'john.doe@example.com',
  firstname: 'John',
  lastname: 'Doe',
  phone: '11111111111',
};

const userPayload = {
  ...userObject,
  password: '55555555',
};

const adminPayload = {
  firstname: 'admin',
  lastname: 'admin',
  phone: '0123456789',
  email: 'admin@example.com',
  password: '55555555',
};

describe('auth', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());

    const roles = new Role({ value: 'USER' });
    await roles.save();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe('registration user route', () => {
    describe('given the user is not validated email', () => {
      it('should return a 400 status and message', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/auth/registration')
          .send({ ...userPayload, email: '' });

        expect(statusCode).toBe(400);
        expect(body.message).toBe('Incorrect email address');
      });
    });

    describe('given the user is not validated password', () => {
      it('should return a 400 status and message', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/auth/registration')
          .send({ ...userPayload, password: '1234567' });

        expect(statusCode).toBe(400);
        expect(body.message).toBe(
          'The minimum password length is at least 8 characters'
        );
      });
    });

    describe('given the user is registrated', () => {
      it('should return a 201 status and message', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/auth/registration')
          .send(userPayload);

        expect(statusCode).toBe(201);
        expect(body.message).toBe('User has been success created');
      });
    });

    describe('given the user is duplicated', () => {
      it('should return a 400 status and message', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/auth/registration')
          .send(userPayload);

        expect(statusCode).toBe(400);
        expect(body.message).toBe('User already exists');
      });
    });
  });

  describe('login user route', () => {
    describe('given the user is wrong password entered', () => {
      it('should return a 400 status and message', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/auth/login')
          .send({ ...userPayload, password: '12345678' });

        expect(statusCode).toBe(400);
        expect(body.message).toBe('Wrong password entered');
      });
    });

    describe('given the user is not found', () => {
      it('should return a 404 status and message', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/auth/login')
          .send({ ...userPayload, email: 'jo.do@exam.com' });

        expect(statusCode).toBe(404);
        expect(body.message).toBe('User not found');
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 200 status and user', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/auth/login')
          .send({ ...userPayload });

        expect(statusCode).toBe(200);
        expect(body).toEqual({
          token: expect.any(String),
          user: {
            ...userObject,
            id: expect.any(String),
            roles: ['USER'],
            lots: [],
          },
        });
      });
    });
  });

  describe('get users route', () => {
    describe('given users if not exist', () => {
      it('should return a 404 status', async () => {
        await supertest(app).get('/auth/user').expect(404);
      });
    });

    describe('given users exist', () => {
      it('should return a 200 status and users', async () => {
        const { statusCode, body } = await supertest(app).get('/auth/users');

        expect(statusCode).toBe(200);
        expect(body).toEqual([
          {
            ...userPayload,
            _id: expect.any(String),
            password: expect.any(String),
            lots: [],
            roles: ['USER'],
            __v: 0,
          },
        ]);
        userId = body[0]._id;
      });
    });
  });

  describe('auth user route', () => {
    describe('given the user does not exist', () => {
      it('should return a 404 status and message', async () => {
        const jwt = generateAccessToken(
          new mongoose.Types.ObjectId('623c5cff2145bbc3371c9d4e'),
          ['USER']
        );

        const { statusCode, body } = await supertest(app)
          .get('/auth/auth')
          .set('Authorization', `Bearer ${jwt}`);

        expect(statusCode).toBe(404);
        expect(body.message).toBe('User not found');
      });
    });

    describe('given the user does not authorized', () => {
      it('should return a 403 status and message', async () => {
        const { statusCode, body } = await supertest(app).get('/auth/auth');

        expect(statusCode).toBe(403);
        expect(body.message).toBe('User not authorized');
      });
    });

    describe('given the user does exist', () => {
      it('should return a 200 status and user', async () => {
        const jwt = generateAccessToken(new mongoose.Types.ObjectId(userId), [
          'USER',
        ]);

        const { statusCode, body } = await supertest(app)
          .get('/auth/auth')
          .set('Authorization', `Bearer ${jwt}`);

        expect(statusCode).toBe(200);
        expect(body).toEqual({
          token: expect.any(String),
          user: {
            ...userObject,
            id: expect.any(String),
            roles: ['USER'],
            lots: [],
          },
        });
      });
    });
  });

  describe('reset user route', () => {
    describe('given the user is not found', () => {
      it('should return a 404 status and message', async () => {
        const { statusCode, body } = await supertest(app)
          .put('/auth/reset')
          .send({ ...userPayload, email: 'unknown@example.com' });

        expect(statusCode).toBe(404);
        expect(body.message).toBe('User not found');
      });
    });

    describe('given the user is not validated password', () => {
      it('should return a 400 status and message', async () => {
        const { statusCode, body } = await supertest(app)
          .put('/auth/reset')
          .send({ ...userPayload, password: '123' });

        expect(statusCode).toBe(400);
        expect(body.message).toBe(
          'The minimum password length is at least 8 characters'
        );
      });
    });

    describe('given the user has no access rights', () => {
      it('should return a 403 status and message', async () => {
        const admin = new User({ ...adminPayload, roles: ['ADMIN'] });
        await admin.save();

        const { statusCode, body } = await supertest(app)
          .put('/auth/reset')
          .send(adminPayload);

        expect(statusCode).toBe(403);
        expect(body.message).toBe('No access rights to change password');
      });
    });

    describe('given the user is validated and exist', () => {
      it('should return a 200 status and message', async () => {
        const { statusCode, body } = await supertest(app)
          .put('/auth/reset')
          .send(userPayload);

        expect(statusCode).toBe(200);
        expect(body.message).toBe('Password has been success update');
      });
    });
  });
});
