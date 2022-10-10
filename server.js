const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;

//Connect With MongoDB
const db_url = process.env.DATABASE_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(db_url).then((con) => {
  console.log("DB CONNECTED!!");
});

// *************************************
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
