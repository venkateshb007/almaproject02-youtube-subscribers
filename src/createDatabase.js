const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");

// Connect to DATABASE
const DATABASE_URL =
  "mongodb+srv://venkatesh:12345@project-2.zgg01pr.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database created..."));

const refreshAll = async () => {
  await subscriberModel.deleteMany({});
  //console.log(connection)
  await subscriberModel.insertMany(data);
  //console.log(data)
  await mongoose.disconnect();
};
refreshAll();
