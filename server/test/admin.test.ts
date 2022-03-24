import supertest from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { app } from '../src/app';

const lotPayload = {
  title: 'Test Lot',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  start: '0000-00-00T00:00',
  finish: '0000-00-00T00:00',
  rate: 1,
};

describe('admin', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe('create admin route', () => {
    describe('given the admin is not created lot', () => {
      it('should return a 400 status', async () => {
        await supertest(app).post('/admin/create').expect(400);
      });
    });

    describe('given the admin is created lot', () => {
      it('should return a 201 status and message', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/admin/create')
          .send(lotPayload);

        expect(statusCode).toBe(201);
        expect(body.message).toBe('Lot has been success created');
      });
    });
  });
});
