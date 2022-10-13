require('dotenv').config({})

const KAFKA_CONFIG = {
  KAFKA_TOPIC: process.env.KAFKA_TOPIC || 'SAMPLE_TOPIC',
  KAFKA_HOST: process.env.KAFKA_HOST || 'localhost',
  KAFKA_PORT: process.env.KAFKA_PORT || 9092,
  KAFKA_CLIENT_ID: process.env.KAFKA_CLIENT_ID || 'SAMPLE_CLIENT',
  KAFKA_GROUP_ID: process.env.KAFKA_GROUP_ID || 'SAMPLE_GROUP',
  KAFKA_MSG_TIME_STEP: process.env.KAFKA_MSG_TIME_STEP || 1000
}

const MONGO_CONFIG = {
  CONNECT_URL:
    process.env.MONGO_CONECTION_STR ||
    'mongodb+srv://dinhlun99hy:Boladinh99.@cluster0.fbb4pqq.mongodb.net/interact-kafka?retryWrites=true&w=majority'
}

module.exports = { KAFKA_CONFIG, MONGO_CONFIG }
