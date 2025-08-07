import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import rutasScanner from "./routes/scanner.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("scannerqr 1.0");
});
app.use("/api/v1/scanner", rutasScanner);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    app.listen(port, () => {
      console.log(`Server connected in the port ${port} 🐶`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
