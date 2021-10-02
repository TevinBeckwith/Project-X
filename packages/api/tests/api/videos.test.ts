// add tests to ensure videos are being returned properly
import supertest from 'supertest';
import { videos } from '../../src/api/videos';
import { testHandler } from '../testUtils/testHandler';


// Need to mock the database for testing?

describe('videos', () => {
  it("/videos returns all videos", async () => {
// Need to mock the return data

    const { body } = await testHandler(videos).get('/').expect(200);

  });

  it("/videos/:video_id returns a specific video", async () => {
    // Need to mock the return data
    const { body } = await testHandler(videos).get('/1').expect(200);

  });
});
