const router = require('express').Router();
const { AirportController } = require('../../controllers/index');
const { AirportMiddleware } = require('../../middlewares/index');
router.post( '/', AirportMiddleware.validateCreateRequests, AirportController.createAirport );
router.get('/', AirportController.getAirports);
router.get('/:id', AirportController.getAirport);
router.delete('/:id', AirportController.destroyAirport);
router.patch('/:id', AirportController.updateAirport);

module.exports = router;
