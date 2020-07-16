export default class Report {
  constructor(partner, id) {
    this.date = new Date();
    this.partner = partner;
    this.id = id;
    this.content = {};
  }
}
