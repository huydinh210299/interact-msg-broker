const { Kafka } = require('kafkajs')
const Message = require('../model/message')
const connectDB = require('../db')
const { KAFKA_CONFIG } = require('../config/var')

const kafka = new Kafka({
  clientId: KAFKA_CONFIG.KAFKA_CLIENT_ID,
  brokers: [`${KAFKA_CONFIG.KAFKA_HOST}:${KAFKA_CONFIG.KAFKA_PORT}`]
})

const consumer = kafka.consumer({
  groupId: KAFKA_CONFIG.KAFKA_GROUP_ID
})

const runConsumer = async () => {
  await connectDB()
  await consumer.connect()
  await consumer.subscribe({
    topic: KAFKA_CONFIG.KAFKA_TOPIC,
    fromBeginning: false
  })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      await Message.create(JSON.parse(message.value))
    }
  })
}

runConsumer()
