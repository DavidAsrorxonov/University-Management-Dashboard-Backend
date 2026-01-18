import express, { json } from "express";
import subjectsRouter from "./routes/subjects";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(json());

app.use("/api/subjects", subjectsRouter);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
