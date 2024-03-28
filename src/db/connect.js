const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");
async function connectToMongoDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`
    );
    return connectionInstance;
  } catch (error) {
    console.log("MongoDB connection Failed", error);
    process.exit(1);
  }
}

module.exports = {
  connectToMongoDB,
};
