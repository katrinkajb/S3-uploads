const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-2' });

const s3Client = AWS(
  process.env.AWS_ACCESS_KEY_ID,
  process.env.SECRET_ACCESS_KEY,
  process.env.BUCKET_NAME
);

module.exports = {
  s3Client
};
