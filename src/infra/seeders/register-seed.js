const AWS = require('aws-sdk');

AWS.config.update({
  region: 'localhost',
  endpoint: 'http://localhost:8000'
});

const dynamodb = new AWS.DynamoDB();

const data = require('./user-seed.json');

const TABLE_NAME = data.tableName;

const populateDB = () => {
  data.items.forEach(async (item) => {
    await dynamodb
      .putItem({
        TableName: TABLE_NAME,
        Item: item
      })
      .promise();
  });

  console.log('The table has been populated');
};
