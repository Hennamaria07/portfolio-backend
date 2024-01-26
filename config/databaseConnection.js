const mongoose = require('mongoose');

const databaseConnection = () => {
   mongoose.connect(process.env.DB_URL)
   .then((res) => console.log(`Database connnected with ${res.connection.host}`))
   .catch((err) => console.error(`Error connecting to the database: ${err.message}`))
};

module.exports = databaseConnection;
