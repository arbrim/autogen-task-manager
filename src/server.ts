import "reflect-metadata";
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { AppDataSource } from "./config/data-source";
import { Task } from "./models/Task";
import { prioritizeTask } from "./services/aiAgent";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

AppDataSource.initialize()
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.error("Database Connection Error:", err));

app.post("/tasks", async (req, res) => {
  const { title, deadline } = req.body;
  try {
    const priority = await prioritizeTask(title);

    const task = Task.create({ title, deadline, completed: false });
    await task.save();

    res.json({ task, priority });
  } catch (error) {
    res.status(500).json({ error: "Error creating task" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
