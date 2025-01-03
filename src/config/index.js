// environment configuration
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME,
    JWT_SECRECT: process.env.JWT_SECRECT,
    CACHE_KEY: process.env.CACHE_KEY
}