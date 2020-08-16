import axios from 'axios';
import * as env from '../../env';

import Coda from '../../../api/coda-api-node/index.js';

console.log(Coda);

(async () => {
  const coda = new Coda(env.apiToken.coda);
const tag = await coda.getDoc(env.Tag.id);
const todayView = await coda.getView(env.Tag.id, env.Today.id, env.apiToken.coda);
  const cols = await coda.listViewCols(env.Tag.id, env.Today.id, env.apiToken.coda);
console.log(await todayRowId);

  const today__reportId = today.values.Report;
  console.log(await today);

  const today__reportRow = await coda.listTableRows(
    env.Tag.id,
    env.Report.id,
    `?c-BFFtRZRcH1=${today__reportId}`,
  );
  console.log(await today__reportRow);
})();

async function getTodayRow () {
  const coda = new Coda(env.apiToken.coda);
  const query = `?useColumnNames=true`
  const todayRowId = (await coda.listViewRows(env.Tag.id, env.Today.id)).items[0].id;
  const todayRow = await coda.getRow(env.Tag.id, env.Curriculum.id, todayRowId, query);
}

async function getTodayReportId() {
  return (await getTodayRow()).values.Report;
}


async function getTodayReport() {
  const reportViewId = 'table-tXNVF9Rq5z';
  const coda = new Coda(env.apiToken.coda);
  const reportView__ColId = 'c-BXS-5ImasJ';
  const reportViewRows = (await coda.listViewRows(env.Tag.id, reportViewId)).items;
  const todayReport = (await reportViewRows).filter(row => row.name === )

}

(async () => {

  const colId = ;
  const today__reportRow = await coda.listTableRows(
    env.Tag.id,
    env.Report.id,
    `?${colId}=${todayId}`,
  );
  const rowId = (await view).items[0].id;

  console.log(await rowId);
  const row = await coda.getRow(env.Tag.id, env.Report.id, rowId, `?useColumnNames=true`);
  console.log(await row);
})();
