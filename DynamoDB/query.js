import { query } from "./db";

// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-query-scan.html

// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.OperatorsAndFunctions.html#Expressions.OperatorsAndFunctions.Syntax

(async () => {
  const ExpressionAttributeNames = { "#keyName": "yourKeyName" };
  const ExpressionAttributeValues = { ":yourKeyName": "yourKeyValue" };
  const KeyConditionExpression = "#yourKeyName = :yourKeyName";
  const TableName = "";

  const params = {
    ExpressionAttributeNames,
    ExpressionAttributeValues,
    KeyConditionExpression,
    TableName,
  };
  const res = await query(params);

  console.log(`res: ${JSON.stringify(res.Items, null, 2)}`);
})();
