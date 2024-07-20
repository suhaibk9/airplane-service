'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Boeing 757',
        capacity: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'Boeing 767',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'Boeing 777',
        capacity: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'Boeing 787',
        capacity: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
};
