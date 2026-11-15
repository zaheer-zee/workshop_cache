const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, '../db.json');

const readData = async () => JSON.parse(await fs.readFile(filePath, 'utf-8'));
const writeData = async (data) => await fs.writeFile(filePath, JSON.stringify(data, null, 2));

module.exports = { readData, writeData };
