'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Groups', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.TEXT,
        unique: true
      }
    }).then(function(queryInterface, Sequelize) {
      return queryInterface.createTable('GroupUsers', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userId: Sequelize.UUID,
        groupId: Sequelize.UUID
      }).then(function(queryInterface, Sequelize) {
          return queryInterface.addColumn('Notes', 'password', Sequelize.UUID)
      }));
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Groups').then(function(queryInterface, Sequelize) {
      return queryInterface.dropTable('GroupUsers').then(function(queryInterface, Sequelize) {
        return queryInterface.removeColumn('Notes', 'groupId')
      })
    });
  }
};
