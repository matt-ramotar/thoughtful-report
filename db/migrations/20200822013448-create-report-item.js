'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Report_Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      prompt: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: false,
      },
      promptTypeId: {
        type: Sequelize.INTEGER,
        references: { model: 'Report_Prompt_Types' },
        allowNull: false,
      },
      itemTypeId: {
        type: Sequelize.INTEGER,
        references: { model: 'Report_Item_Types' },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Report_Items');
  },
};
