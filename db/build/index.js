const fs = require('fs');
const Table = require('./Table.js');

// SECTION: tables

async function getSchema() {
  return await fs.promises.readFile('../ThoughtfulReport.sql', 'utf-8', err => {
    if (err) throw err;
  });
}

async function getTables() {
  return (await getSchema())
    .split(';\n')
    .filter(ele => ele.includes('CREATE TABLE'))
    .map(ele => ele.trim());
}

async function getTableNames() {
  const data = await getTables();
  const regex = /(?<=TABLE ")[\w]+/;
  return data.map(ele => ele.match(regex)[0]);
}

async function getTableAttributes() {
  const tables = [];
  const data = await getTables();

  data.forEach(ele => {
    let name = ele.match(/TABLE "([\w]+)/)[1];
    let attributes = [];
    let temp = ele.split('\n');
    temp.shift();
    temp.pop();
    temp.map(ele => attributes.push(ele.match(/"[\w]+"[\w ]+/)[0]));
    let table = new Table(name, attributes);
    console.log(table);
    tables.push(table);
  });
  return tables;
}

// SECTION: migrations

async function generateModels() {
  const tables = await getTableAttributes();
  tables.forEach(ele => console.log(ele.generateModel()));
}

generateModels();

// SECTION: models

// TODO: Map associations

// SECTION: seeders

// TODO: create seeders

// TODO: insert data

// SECTION: associations

// TODO: connect tables
