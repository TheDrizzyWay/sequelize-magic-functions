export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('RapperAlbums', {
    rapperId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Rappers',
        key: 'id',
        onDelete: 'CASCADE'
      },
    },
    albumId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Albums',
        key: 'id',
        onDelete: 'CASCADE'
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('RapperAlbums'),
};
