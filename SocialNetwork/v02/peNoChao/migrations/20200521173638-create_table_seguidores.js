'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('seguidores', {
        id:
        {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true
        },
        jogador_id:
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: 
          { 
            model:'jogadores',
            key: 'id'
          }
        },
        seguidor_id:
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: 
          { 
            model:'jogadores',
            key: 'id'
          }
        },
  })},

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('seguidores');
  }
};