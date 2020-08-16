import * as method from './package/function/index.js';

export default class Day {
  constructor(token) {
    this.token = token;
    this.id = null;
    this.date = null;
    this.learningObj = [];
    this.notes = [];
    this.report = null;
    this.tags = [];
  }
  getRowId() {}
  getRow() {}
  getDayId() {}
  getReport() {}
  getLearningObj() {}
  getDate() {}
  getTags() {}
  getNotes() {}
}
