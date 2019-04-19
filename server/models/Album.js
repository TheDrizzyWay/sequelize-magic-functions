export default (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Album.associate = (models) => {
    Album.belongsToMany(models.Rapper, {
      through: 'RapperAlbums',
     });
  };

  return Album;
};
