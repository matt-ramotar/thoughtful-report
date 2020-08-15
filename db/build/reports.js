const { Report } = require('../models');

// NOW: create 100 reports

(async () => {
  await Report.bulkCreate(Array(100).fill({}));
})();
