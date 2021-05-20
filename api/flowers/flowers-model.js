const db = require('../../data/dbConfig.js');

async function removeFlower(id) {
  const flower = await db('flowers').where({ id }).first();
  await db('flowers').where('id', id).del();
  return flower;
}

async function getAll() {
  const floral = await db.select('*').from('flowers');
  return floral;
}

async function create(flower) {
  const [id] = await db('flowers').insert(flower);
  return db('flowers').where('id', id).first();
}

module.exports = {
  removeFlower,
  getAll,
  create,
};
