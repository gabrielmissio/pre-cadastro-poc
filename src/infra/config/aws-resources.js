const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

AWS.config.update({
  region: process.env.AWS_REGION,
  endpoint: process.env.AWS_ENDPOINT
});

const dynamodb = new AWS.DynamoDB();
const dynamoDocClient = new AWS.DynamoDB.DocumentClient();

module.exports = { dynamoDocClient, dynamodb };
