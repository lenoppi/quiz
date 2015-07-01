// modelo quiz para sqlite3

module.exports = function(sequelize, DataTypes) {
   return sequelize.define('Quiz', 
              { pregunta: DataTypes.STRING,
		respuesta: DataTypes.STRING,
		});
}
