const request = require('supertest')
const mongoose = require('mongoose')
const connectDB = require('../db')

const app = require('../api/server')

describe('test get message API', (done) => {
  beforeAll(() => {
    connectDB()
  })

  it('status code must 200', async () => {
    return request(app)
      .get('/')
      .then((res) => {
        expect(res.statusCode).toBe(200)
      })
  })

  afterAll(() => {
    mongoose.disconnect()
  })
})
