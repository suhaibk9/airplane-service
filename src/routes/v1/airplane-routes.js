const router = require('express').Router();
const { AirplaneMiddleware } = require('../../middlewares');
const { AirplaneController } = require('../../controllers/index');

router.post(
  '/',
  AirplaneMiddleware.validateCreateRequests,
  AirplaneController.createAirplane
);
router.get('/', AirplaneController.getAirplanes);
router.get('/:id', AirplaneController.getAirplane);
router.delete('/:id', AirplaneController.destroyAirplane);
router.patch('/:id', AirplaneController.updateAirplane);
module.exports = router;
