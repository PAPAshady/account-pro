const { mongoose } = require('mongoose');

export const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.databaseUri);
    console.log('Connected to database!');
  } catch (err) {
    console.error('Error connecting to database => ', err);
  }
};
