const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config/index');
const AppError = require('../utils/errors/app-error');
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async destroy(data) {
    return await this.model.destroy({
      where: {
        id: data,
      },
    });
  }

  async get(primaryKey) {
    const airplane = await this.model.findByPk(primaryKey);
    if (!airplane) {
     console.log("No Airplane Found");
      throw new AppError('Airplane not found', StatusCodes.NOT_FOUND);
    }
    return airplane;
  }

  async getAll() {
    return await this.model.findAll();
  }

  async update(id, data) {
    return await this.model.update(data, {
      where: {
        id: id,
      },
    });
  }
}

module.exports = CrudRepository;
