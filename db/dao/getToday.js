const { Day, Report } = require('../models');

async function getToday() {
  const today = await Day.findOne({ where: { date: new Date() }, include: Report });
  console.log(await today);
}

getToday();
