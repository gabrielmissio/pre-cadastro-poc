const AWS = require('aws-sdk');
const data = require('./user-seed.json');

AWS.config.update({
  region: 'localhost',
  endpoint: 'http://localhost:8000'
});

const dynamoDocClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = data.tableName;

const populateTable = () => {
  data.items.forEach(async (item) => {
    await dynamoDocClient
      .put({
        TableName: TABLE_NAME,
        Item: item
      })
      .promise();
  });

  console.log(`The table ${TABLE_NAME} has been populated`);
};

const deleteTableItems = () => {
  data.items.forEach(async (item) => {
    await dynamoDocClient
      .delete({
        TableName: TABLE_NAME,
        Key: {
          PK: item.PK,
          SK: item.SK
        }
      })
      .promise();
  });

  console.log(`The items from table ${TABLE_NAME} has been removed`);
};

const handler = () => {
  const operation = process.argv[2];
  if (operation === 'populate') return populateTable();

  return deleteTableItems();
};

handler();
