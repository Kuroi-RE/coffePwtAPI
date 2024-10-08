import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    msg: "Welcome to the API",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port http://localhost:" + process.env.PORT);
});
