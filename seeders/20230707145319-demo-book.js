'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Books', [{
    title: 'No Game No Life',
    genre: 'Anime',
    createdAt: new Date(),
    updatedAt: new Date()
   }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
