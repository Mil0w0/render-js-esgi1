const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  "postgresql://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_HOSTNAME + "/" + process.env.DB_NAME,
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
