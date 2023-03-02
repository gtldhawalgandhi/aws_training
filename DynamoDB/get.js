import { get } from './db';

const TableName = 'martians'
const Key = {
    "userId": "user2"
}
const params = {
  TableName,
  Key,
  IndexName: 'email'
};

(async () => {
  const res = await get(params);
  console.log(JSON.stringify(res, null, 2));
})();
