const Flower = require('./flowers-model');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  Flower.getAll()
    .then((flower) => {
      res.status(200).json(flower);
    })
    .catch(next);
});

router.get('/:id', (req, res) => {});

router.post('/', (req, res, next) => {});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deleted = await Flower.removeFlower(id);
  res.status(200).json(deleted);
});

router.put('/', (req, res) => {});

router.use((err, req, res, next) => {
  //eslint-disable-line
  res.status(err.status || 500).json({
    message: 'Never pick flowers without permission!',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
