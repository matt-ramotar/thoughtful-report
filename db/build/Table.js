class Table {
  constructor(name, attributes) {
    this.name = name;
    this.attributes = this.setAttributes(attributes);
  }

  generateModel() {
    return `npx sequelize-cli model:generate --name ${this.name} ${this.attributes}`;
  }

  setAttributes(attributes) {
    if (attributes.length <= 1) return '';
    attributes.shift();
    return attributes.reduce((accum, ele, i) => {
      let temp = (i === 0 ? ele.replace(/"/, '') : ele.replace(/"/, ',')).replace(/" /, ':');
      return (accum += temp);
    }, '--attributes ');
  }
}

module.exports = Table;
