const router = require('express').Router();
const { FlightMiddleware } = require('../../middlewares/index');
const { FlightController } = require('../../controllers/index');

router.post(
  '/',
  FlightMiddleware.validateCreateRequests,
  FlightController.createFlight
);
router.get('/', FlightController.getAllFlights);
router.get('/:id', FlightController.getFlight);
router.patch('/:id/seats', FlightController.updateSeats);
module.exports = router;
