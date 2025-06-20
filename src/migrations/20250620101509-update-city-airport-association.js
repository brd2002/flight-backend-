'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addConstraint('Airports', {
      type: 'FOREIGN KEY',
      name: 'cityId',
      fields: ['cityId'],
      references: {
        table: 'Cities',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeConstraint('Airports', 'cityId');
  }
};
