const router = require('express').Router();
const { CityMiddleWare } = require('../../middlewares');
const { CityController } = require('../../controllers/index');
router.post(
  '/',
  CityMiddleWare.validateCreateRequests,
  CityController.createCity
);
router.delete('/:id', CityController.destroyCity);
router.patch('/:id', CityController.updateCity);
module.exports = router;
