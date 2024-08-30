const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

mongoose.set("strictQuery", false);

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => {
    console.log("Error", err);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running or port ${port}...`);
});
