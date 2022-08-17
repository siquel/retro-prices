import request from 'supertest'

import { createServer } from './server'

const app = createServer()

describe('server', () => {
  it('serves health', async () => {
    await request(app).get('/_health').expect(200)
  })
})
