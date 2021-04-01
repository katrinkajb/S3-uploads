const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/utils/aws.js');
const s3Client = require('../lib/utils/aws.js');

jest.mock('s3Client', () => () => ({
  uploads: {
    create: jest.fn(),
  },
}));

describe('CRUD routes for managing files in S3', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let upload;
  beforeEach(async() => {
    upload = await Upload.insert({ 
      fileName: "testFile",
      fileBody: fileContent 
    })
  });

  it('Post creates a new file in the db and uploads to S3', async () => {
    const res = await request(app)
      .post('/api/v1/uploads')
      .send({ 
        fileName: 'totoro',
        fileBody: fileContent
       })

      expect(res.body).toEqual({
        id: '2',
        filePath: 'https://lab-4-s3-bucket.s3-us-west-2.amazonaws.com/toroto.jpg',
      });
  });
