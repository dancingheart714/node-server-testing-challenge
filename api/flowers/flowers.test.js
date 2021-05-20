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

describe('[GET] /flowers', () => {
  it('responds with a 200 ok', async () => {
    const res = await request(server).get('/flowers');
    expect(res.status).toBe(200);
  });
});

describe('[DELETE] /delete flower', () => {
  it('deletes flower from database', async () => {
    const [id] = await db('flowers').insert(iris);
    let removed = await db('flowers').where({ id }).first();
    expect(removed).toBeTruthy();

    await request(server).delete('/flowers/' + id);
    removed = await db('flowers').where({ id }).first();
    expect(removed).toBeFalsy();
  });
  it('responds with the deleted flower', async () => {
    const res = await db('flowers').insert(iris);
    let flower = await request(server).delete('/flowers/1');
    expect(flower.body).toMatchObject(iris);
  });
});
