const router = require('express').Router();
const {
  validateCreateRequests,
} = require('../../middlewares/airplane-middleware');
const { AirplaneController } = require('../../controllers/index');

router.post('/', validateCreateRequests, AirplaneController.createAirplane);
router.get('/', AirplaneController.getAirplanes);
router.get('/:id', AirplaneController.getAirplane);
router.delete('/:id', AirplaneController.destroyAirplane);  
module.exports = router;
