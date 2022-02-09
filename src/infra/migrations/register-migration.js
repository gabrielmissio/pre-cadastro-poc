const AWS = require('aws-sdk');

AWS.config.update({
  region: 'localhost',
  endpoint: 'http://localhost:8000'
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Register',
  KeySchema: [
    {
      AttributeName: 'PK',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'SK',
      KeyType: 'RANGE'
    }
  ],
  AttributeDefinitions: [
    {
      AttributeName: 'PK',
      AttributeType: 'S'
    },
    {
      AttributeName: 'SK',
      AttributeType: 'S'
    },
    {
      AttributeName: 'email',
      AttributeType: 'S'
    },
    {
      AttributeName: 'cpf',
      AttributeType: 'S'
    }
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: 'email-index',
      KeySchema: [
        {
          AttributeName: 'email',
          KeyType: 'HASH'
        }
      ],
      Projection: {
        ProjectionType: 'ALL'
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
      }
    },
    {
      IndexName: 'cpf-index',
      KeySchema: [
        {
          AttributeName: 'cpf',
          KeyType: 'HASH'
        }
      ],
      Projection: {
        ProjectionType: 'ALL'
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
      }
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

const createTable = async () => {
  await dynamodb.createTable(params).promise();
  console.log('The table has been created');
};

const dropTable = async () => {
  await dynamodb.deleteTable({ TableName: params.TableName }).promise();
  console.log(`The table ${params.TableName} has been dropped`);
};

const handler = () => {
  const operation = process.argv[2];
  if (operation === 'start') return createTable();

  return dropTable();
};

handler();
