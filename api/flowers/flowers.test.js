const request = require('supertest');
const db = require('../../data/dbConfig');
const server = require('../server.js');

const Flower = require('./flowers-model');

const iris = { name: 'Iris' };
const pansy = { name: 'Pansy' };

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db('flowers').truncate();
});
afterAll(async () => {
  await db.destroy();
});

it('correct env', () => {
  expect(process.env.DB_ENV).toBe('testing');
});

describe('Flowers model', () => {
  describe('creates flower', () => {
    it('add a flower to the database', async () => {
      let list;
      await Flower.create(snapdragon);
      all = await db('flowers');
      expect(all).toHaveLength(1);

      await Flower.create(poppy);
      all = await db('flowers');
      expect(all).toHaveLength(2);
    });
    it('inserted flower', async () => {
      const flower = await Flower.create(snapdragon);
      expect(flower).toMatchObject({ id: 1, ...snapdragon });
    });
  });
});
