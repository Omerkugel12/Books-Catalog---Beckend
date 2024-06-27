const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

async function main() {
  await connectDB();

  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
main();
