require('dotenv').config();

const app = require('./src/app');
const connectToDb = require('./src/config/database');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectToDb();
    console.log('Database connected successfully');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
