'use strict';
const { ENUMS } = require('../utils/common/index');
const { SEAT_TYPE } = ENUMS;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seats', [
      // Airplane 1 seats
      {
        airplaneId: 1,
        row: '1',
        col: 'A',
        type: SEAT_TYPE.ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: '1',
        col: 'B',
        type: SEAT_TYPE.ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: '1',
        col: 'C',
        type: SEAT_TYPE.PREMIUM_ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Airplane 2 seats
      {
        airplaneId: 2,
        row: '1',
        col: 'A',
        type: SEAT_TYPE.BUSINESS,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 2,
        row: '1',
        col: 'B',
        type: SEAT_TYPE.BUSINESS,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 2,
        row: '1',
        col: 'C',
        type: SEAT_TYPE.FIRST_CLASS,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Airplane 3 seats
      {
        airplaneId: 3,
        row: '2',
        col: 'A',
        type: SEAT_TYPE.ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 3,
        row: '2',
        col: 'B',
        type: SEAT_TYPE.ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 3,
        row: '2',
        col: 'C',
        type: SEAT_TYPE.PREMIUM_ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Airplane 4 seats
      {
        airplaneId: 4,
        row: '2',
        col: 'A',
        type: SEAT_TYPE.BUSINESS,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 4,
        row: '2',
        col: 'B',
        type: SEAT_TYPE.BUSINESS,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 4,
        row: '2',
        col: 'C',
        type: SEAT_TYPE.FIRST_CLASS,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Airplane 5 seats
      {
        airplaneId: 5,
        row: '3',
        col: 'A',
        type: SEAT_TYPE.ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 5,
        row: '3',
        col: 'B',
        type: SEAT_TYPE.ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 5,
        row: '3',
        col: 'C',
        type: SEAT_TYPE.PREMIUM_ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Airplane 6 seats
      {
        airplaneId: 6,
        row: '3',
        col: 'A',
        type: SEAT_TYPE.BUSINESS,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 6,
        row: '3',
        col: 'B',
        type: SEAT_TYPE.BUSINESS,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 6,
        row: '3',
        col: 'C',
        type: SEAT_TYPE.FIRST_CLASS,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Seats', null, {});
  },
};
