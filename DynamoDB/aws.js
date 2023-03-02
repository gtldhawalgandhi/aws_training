import AWS from 'aws-sdk';

const client = () => {
  AWS.config.update({ region: 'eu-west-1' });
  AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: 'dhawal' });

  return new AWS.DynamoDB.DocumentClient();
};

export {
    AWS,
    client,
};
