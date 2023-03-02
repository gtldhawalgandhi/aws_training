import { client as dynamoDBClient } from './aws';

const dynamoDB = dynamoDBClient();

// const dbMap = () => {
//     const dynamoDB = dynamoDBClient();

//     return {
//       'query': (params) => dynamoDB.query(params),
//       'get': (params) => dynamoDB.get(params),
//       'scan': (params) => dynamoDB.scan(params),
//       'put': (params) => dynamoDB.put(params),
//       'update': (params) => dynamoDB.update(params),
//       'batchWrite': (params) => dynamoDB.batchWrite(params),
//     };
//   }

export const get = (params) => dynamoDB.get(params).promise();
export const query = (params) => dynamoDB.query(params).promise();
export const scan = (params) => dynamoDB.scan(params).promise();
export const put = (params) => dynamoDB.put(params).promise();
export const update = (params) => dynamoDB.update(params).promise();
