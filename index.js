const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://thoughtful_report@localhost/thoughtful_report_bot');

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully.');
  } catch (err) {
    console.error('Unable to connect to database.', err);
  }
}

connect();
