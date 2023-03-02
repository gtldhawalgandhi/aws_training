import { put } from "./db";

(async () => {
  const TableName = "martians";
  const Item = {
    "userId": "user2",
    "age": 35
  };
  const yourKeyName = "userId";
  const yourKeyValue = "user2";

  const params = {
    TableName,
    Item,
    // ConditionExpression: "not contains(#attrName, :attrValue)",
    // ExpressionAttributeNames: {
    //   "#attrName": yourKeyName,
    // },
    // ExpressionAttributeValues: {
    //   ":attrValue": yourKeyValue,
    // },
  };

  const res = await put(params);
  console.log(`Put response: ${JSON.stringify(res, null, 2)}`)
})();
