import * as fs from 'fs/promises';
import path from 'path';
import supertest from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { app } from '../src/app';
import { Lot } from '../src/models/Lot';

let lotId = new mongoose.Types.ObjectId().toString();

const lotPayload = {
  title: 'Test Lot',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  img: '',
  start: '0000-00-00T00:00',
  finish: '0000-00-00T00:00',
  rate: 1,
  active: false,
  completed: false,
  currentUser: '',
};

describe('auction', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());

    const pathImg = path.resolve(__dirname, '../src/assets', 'auction.png');
    const file = await fs.readFile(pathImg, { encoding: 'base64' });
    lotPayload.img = 'data:image/png;base64,' + file;

    const lots = new Lot(lotPayload);
    await lots.save();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe('get lots route', () => {
    describe('given lots does exist', () => {
      it('should return a 200 status and lots', async () => {
        const { statusCode, body } = await supertest(app).get('/auction/lots');

        expect(statusCode).toBe(200);
        expect(body).toEqual({
          currentLots: [
            {
              ...lotPayload,
              _id: expect.any(String),
              __v: 0,
            },
          ],
          activeLots: [],
          completedLots: [],
        });

        lotId = body.currentLots[0]._id;
      });
    });
  });

  describe('get lot by id route', () => {
    describe('given lot does not exist', () => {
      it('should return a 404 status and message', async () => {
        const id = '623c7c90ec355631bd6b6bf3';
        const { statusCode, body } = await supertest(app).get(
          `/auction/lots/${id}`
        );

        expect(statusCode).toBe(404);
        expect(body.message).toBe('Lot not found');
      });
    });

    describe('given lot does exist', () => {
      it('should return a 200 status and lot', async () => {
        const { statusCode, body } = await supertest(app).get(
          `/auction/lots/${lotId}`
        );

        expect(statusCode).toBe(200);
        expect(body).toEqual({
          ...lotPayload,
          _id: expect.any(String),
          __v: 0,
        });
      });
    });
  });

  describe('put lots by id route', () => {
    describe('given lots do not exist', () => {
      it('should return a 404 status and message', async () => {
        const data = ['623c7c90ec355631bd6b6bf3'];
        const { statusCode, body } = await supertest(app)
          .put(`/auction/lots`)
          .send({ data });

        expect(statusCode).toBe(404);
        expect(body.message).toBe('Lot not found');
      });
    });

    describe('given lots do exist', () => {
      it('should return a 200 status, message and lots', async () => {
        const data = [lotId];
        const { statusCode, body } = await supertest(app)
          .put(`/auction/lots`)
          .send({ data });
        console.log(body.lots.activeLots[0]);

        expect(statusCode).toBe(200);
        expect(body.message).toBe('Auction lots activated');
        expect(body.lots).toEqual({
          currentLots: [],
          activeLots: [
            {
              ...lotPayload,
              _id: expect.any(String),
              active: true,
              __v: 0,
            },
          ],
          completedLots: [],
        });
      });
    });
  });

  describe('remove lots by id route', () => {
    describe('given lots do not exist', () => {
      it('should return a 404 status and message', async () => {
        const data = ['623c7c90ec355631bd6b6bf3'];
        const { statusCode, body } = await supertest(app)
          .delete(`/auction/lots`)
          .send(data);

        expect(statusCode).toBe(404);
        expect(body.message).toBe('Lot not found');
      });
    });

    describe('given lots do exist', () => {
      it('should return a 200 status, message and lots', async () => {
        const data = [lotId];
        const { statusCode, body } = await supertest(app)
          .delete(`/auction/lots`)
          .send(data);

        expect(statusCode).toBe(200);
        expect(body.message).toBe('Auction lots removed');
        expect(body.lots).toEqual({
          currentLots: [],
          activeLots: [],
          completedLots: [],
        });
      });
    });
  });
});
