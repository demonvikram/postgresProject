const express = require('express');
const sequelize = require('./config/config');
const User = require('./model/user');
const routes = require('./Routes/userRoutes');

const app = express();
const port = 4000;

// Test the database connection
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connected to the PostgreSQL database.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

testDatabaseConnection();
sequelize.sync({force:true})

// Use JSON middleware for parsing request bodies
app.use(express.json());

// Mount your routes
app.use("/api/v1", routes);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

