exports.seed = function (knex) {
  return knex('flowers')
    .del()
    .then(function () {
      return knex('flowers').insert([
        { name: 'tulip' },
        { name: 'rose' },
        { name: 'daffodil' },
        { name: 'crocus' },
        { name: 'peonie' },
        { name: 'daisy' },
      ]);
    });
};
