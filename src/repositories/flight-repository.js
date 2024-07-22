const { where } = require('sequelize');
const CrudRepository = require('./crud-repository');
class FlightRepository extends CrudRepository {
  constructor(model) {
    super(model);
  }
  async getAllFlights(filter, sort) {
    const response = await this.model.findAll({
      where: filter,
      order: sort,
    });
    return response;
  }
}
module.exports = FlightRepository;
