import express from 'express'
import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server!!!!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
