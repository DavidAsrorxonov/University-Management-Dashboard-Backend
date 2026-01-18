import express, { json } from "express";

const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
