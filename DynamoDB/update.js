import { update } from "./db";

(async () => {
  const Key = {
    userId: "user2"
  };
  const TableName = "martians";
  const UpdateExpression = "SET #attrName = :attrValue";
  const ExpressionAttributeNames = { "#attrName": "email" };
  const ExpressionAttributeValues = { ":attrValue": "mynew@email.me" };

  const params = {
    TableName,
    Key,
    UpdateExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues,
  };
  const res = await update(params);
})();
