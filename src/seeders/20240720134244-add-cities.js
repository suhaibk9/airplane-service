'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Seed array with cities
    const cities = [
      {
        name: 'New Delhi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Varanasi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mumbai',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kolkata',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chennai',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert cities into the cities table
    await queryInterface.bulkInsert('cities', cities, {});
  },

  async down(queryInterface, Sequelize) {
    // Delete all records from the cities table
    await queryInterface.bulkDelete('cities', null, {});
  },
};
