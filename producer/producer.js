const { Kafka } = require('kafkajs')
const { KAFKA_CONFIG } = require('../config/var')

const kafka = new Kafka({
  clientId: KAFKA_CONFIG.KAFKA_CLIENT_ID,
  brokers: [`${KAFKA_CONFIG.KAFKA_HOST}:${KAFKA_CONFIG.KAFKA_PORT}`]
})

const producer = kafka.producer()

const runProducer = async () => {
  await producer.connect()
  setInterval(() => {
    const now = new Date()

    producer.send({
      topic: KAFKA_CONFIG.KAFKA_TOPIC,
      messages: [
        {
          value: JSON.stringify({
            title: `Message was sent at ${now.toLocaleTimeString()} ${now.toLocaleDateString()}`,
            time: now
          })
        }
      ]
    })
  }, KAFKA_CONFIG.KAFKA_MSG_TIME_STEP)
}

runProducer()
