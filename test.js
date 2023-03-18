'use strict';

const { randomUUID } = require('crypto');
const fs = require('fs');

const data = [
  {
    id: randomUUID(),
    text: 'Сделать TODO',
    createdAt: new Date(),
  },
];

const jsonData = JSON.stringify(data);

console.log(typeof data, data, typeof jsonData, jsonData);

try {
  fs.writeFileSync('data.json', jsonData, 'utf-8');
  console.log('File written successfully');
} catch (err) {
  console.log(`Error writing file: ${err}`);
}

const jsonData2 = fs.readFileSync('data.json', 'utf-8');

const data2 = JSON.parse(jsonData2);
console.log(typeof data2, data2);
