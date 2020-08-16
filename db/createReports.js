const { Report } = require('./models');

// create 100 reports

async function createReports() {
  await Report.bulkCreate(Array(100).fill({}));
}

module.exports = { createReports };
