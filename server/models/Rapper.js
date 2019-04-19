export default (sequelize, DataTypes) => {
  const Rapper = sequelize.define('Rapper', {
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

  Rapper.associate = (models) => {
    Rapper.belongsToMany(models.Album, {
       through: 'RapperAlbum',
     });
  };

  return Rapper;
};
