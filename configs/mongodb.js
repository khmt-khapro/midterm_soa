const mongoose = require("mongoose");

function connectDB() {
  const connection = mongoose.createConnection(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  });

  connection.on("connected", () => {
    console.log(">>>>> mongodb connected sucessfully");
  });

  connection.on("error", (error) => {
    console.log("connection error >>>>>", error.message);
  });

  connection.on("disconnected", () => {
    console.log(">>>>> mongodb disconnected");
  });

  process.on("SIGINT", async () => {
    await connection.close();
    process.exit(0);
  });
}

module.exports = connectDB;
