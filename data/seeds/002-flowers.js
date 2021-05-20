exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('flowers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('flowers').insert([
        { id: 1, name: 'tulip' },
        { id: 2, name: 'rose' },
        { id: 3, name: 'daffodil' },
        { id: 4, name: 'crocus' },
        { id: 5, name: 'peonie' },
        { id: 6, name: 'daisy' },
      ]);
    });
};
